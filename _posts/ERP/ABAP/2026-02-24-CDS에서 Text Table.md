---
layout: post
categories: ["ERP", "ABAP"]
title: "ABAP - CDS View에서 Text Table 활용하기"
tags: [ERP개발, SAP, ABAP, CDS, TextTable]
use_math: true
---

## 키워드

- **ADT (Abap Development Tool)**: 이클립스 기반의 ABAP 개발 도구
- **CDS (Core Data Service)**: 차세대 데이터 모델링 기술
- **Text Table**: 다국어 지원을 위한 텍스트 저장 테이블

---

## 1. 개요
요즘은 CDS View를 활용하는 법을 공부하고 있다.
어제는 테이블 간의 관계(Association)에 대해 정리했는데, 오늘은 그 연장선으로 **Text Table**을 만들고 CDS View에서 이를 활용해 **사용자의 언어 환경에 맞는 정보를 자동으로 조회**하는 방법을 정리해보려 한다.

---

## 2. Text Table이란? (Why use Text Table?)

사용자가 로그인한 언어(한글, 영어 등)에 따라 화면에 출력되는 텍스트가 달라져야 진정한 '유저 친화적'인 프로그램일 것이다.
SAP에서는 이를 위해 **데이터의 본질(Code)**과 **설명(Description)**을 분리해서 저장한다.

*   **Main Table**: 변하지 않는 기준 정보 (ID, 수량, 날짜 등)
*   **Text Table**: 언어별로 달라지는 설명 (Description)

즉, "사과"라는 데이터를 저장할 때, 본판 테이블에는 `APPLE_ID`만 저장하고, 텍스트 테이블에는 `KO:사과`, `EN:Apple` 처럼 언어별로 따로 저장해두는 방식이다.

### 구조적 특징

![text table 연결현황](/assets/image/tt1.png)

위 그림처럼 우리가 조회하고 싶은 **대상 테이블(Main Table)**과 **텍스트 테이블(Text Table)**이 연결되어 있고, 텍스트 테이블은 다시 **언어 키(T002)**와 연결되는 구조를 가진다.

---

## 3. Text Table 생성 조건 (Prerequisites)

SAP GUI(SE11)에서 만드는 방법도 있지만, 원리만 알면 ADT(이클립스)에서도 코드로 바로 정의할 수 있다.
Text Table로 인정받기 위해서는 다음 4가지 조건을 충족해야 한다.

1.  **테이블은 2개가 필요하다.**
    *   **대상 테이블 (Main Table)**: 기준 데이터가 있는 테이블.
    *   **텍스트 테이블 (Text Table)**: `대상 테이블의 키` + `LANGU(언어)`를 PK로 가진다.
2.  **네이밍 룰 (Naming Convention)**
    *   보통 기본 테이블 이름 뒤에 **'T'**를 붙인다. (예: `MARA` -> `MAKT`)
    *   강제 사항은 아니지만, SAP 표준과 개발자들 사이의 암묵적인 룰이다.
3.  **Language Key 설정 (Foreign Key)**
    *   텍스트 테이블의 언어 필드(`SPRAS` 등)는 `T002` 테이블(언어 마스터)과 Foreign Key로 연결되어야 한다.
    *   Annotation: `@AbapCatalog.textLanguage`
4.  **Main Table과의 연결 (Foreign Key)**
    *   텍스트 테이블의 데이터 키는 대상 테이블의 키와 Foreign Key로 연결되어야 한다.
    *   이때 **"Text Table 관계"**임을 명시하는 옵션을 줘야 한다.

---

## 4. ADT에서 바로 Text Table 만들기 (Code Example)

수업 시간에는 GUI를 통해 만들었지만, 위 조건을 만족하는 코드를 작성하면 ADT에서도 바로 생성이 가능하다.

### ① 대상 테이블 (Main Table)
```sql
@EndUserText.label : 'Table Text table test'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #ALLOWED
define table zttttest_b30 {

  key client   : mandt not null;
  key code_id  : numc4 not null;
  created_date : dats;

}
```

### ② 텍스트 테이블 (Text Table)
```sql
@EndUserText.label : 'Text Table for test table'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #ALLOWED
define table zttttest_b30t {

  key client  : abap.clnt not null;
  
  /* 1. 언어 키 설정 (@AbapCatalog.textLanguage 중요!) */
  @AbapCatalog.textLanguage
  @AbapCatalog.foreignKey.screenCheck : false
  key sprsl   : spras not null
    with foreign key [0..*,1] t002
      where spras = zttttest_b30t.sprsl;

  /* 2. 본판 테이블과 연결 */
  @AbapCatalog.foreignKey.label : '본판 테이블 키'
  @AbapCatalog.foreignKey.keyType : #TEXT_KEY
  @AbapCatalog.foreignKey.screenCheck : true
  key code_id : numc4 not null
    with foreign key zttttest_b30
      where client = zttttest_b30t.client
        and code_id = zttttest_b30t.code_id;
        
  code_desc   : char20;

}
```

**코드 포인트:**
*   `@AbapCatalog.textLanguage`: "이 필드가 언어 키야!"라고 시스템에 알려주는 핵심 어노테이션이다.
*   `with foreign key ...`: `sprsl`은 `T002`와, `code_id`는 본판 테이블인 `zttttest_b30`과 관계를 맺고 있다.

---

## 5. CDS View에서 Text Table 활용하기

이제 테이블이 준비되었으니, CDS View에서 이를 가져다 써보자.
Text Table이 제대로 정의되었다면, **Association**을 통해 아주 쉽게 텍스트를 가져올 수 있다.

```sql
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'text table test cds view'
@Metadata.ignorePropagatedAnnotations: true
define view entity ZCDSTTTEST_B30 as select from zttttest_b30
    
    /* Text Table과 Association 연결 */
    association[0..*] to zttttest_b30t as _Text
        on $projection.CodeId = _Text.code_id
{
    key code_id as CodeId,
    created_date as CreatedDate,
    
    /* 언어에 맞는 텍스트 가져오기 */
    _Text.code_desc as Description,
    
    /* Association 공개 (필요 시) */
    _Text
}
```

### 결과 확인
위 CDS View를 실행(`F8`)해보면, 로그인한 언어에 맞춰서 텍스트가 자동으로 매핑되어 나온다.

![text table 연결현황](/assets/image/tt2.png)

별도의 `WHERE LANGU = sy-langu` 조건절을 넣지 않아도, **CDS와 Text Table의 관계 설정 덕분에 시스템이 알아서 사용자 언어에 맞는 데이터를 가져온다.**
이것이 CDS View에서 Text Table을 활용할 때의 가장 큰 장점이다.

---

## 6. 요약

1.  **Text Table**은 다국어 지원을 위해 ID와 텍스트를 분리한 테이블이다.
2.  만들 때는 **테이블 2개(Main, Text)**, **Naming Rule(T)**, **Language Key(T002)**, **Foreign Key** 연결이 필요하다.
3.  ADT에서 `@AbapCatalog.textLanguage` 어노테이션을 사용해 직접 정의할 수 있다.
4.  CDS View에서 Association으로 연결하면, **자동으로 세션 언어(sy-langu)에 맞는 텍스트를 조회**해준다.
