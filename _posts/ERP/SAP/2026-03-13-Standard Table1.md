---
layout : post
title: "Standard Table(자재, 거래처 편)"
date: 2026-03-13 00:00:00 +0900
categories: [ERP, SAP]
tags: [SAP, ABAP, DB, TABLE]
---

## 개요
ERP에는 Standard가 있고 개발자들은 CBO(Customer Bolt-On)를 개발하여 표준 시스템에 없는 추가 기능을 구현한다. 따라서 Standard에 있는 내용을 제대로 이해하는 것이 필요하다. 

## Material Create(자재코드)

### 자재
자재(Material)는 말 그대로 "무엇을 만들기 위한 기본적인 재료"를 의미한다. 

#### 1. MARA(General Material Data)
##### 역할
SAP 시스템 전체(Client Level)에서 공통으로 쓰는 자재의 뼈대 정보를 담고 있다.
##### 필드

| Field       | Description | example               |
| ----------- | ----------- | --------------------- |
| MATNR (KEY) | 자재 번호       | FURN-001              |
| MTART       | 자재 유형       | ROH 원자재, FERT 완제품     |
| MEINS       | 기본 단위       | EA(개수), KG(킬로그램)      |
| MATKL       | 자재 그룹       | BRGEW/NTGEW (총중량/순중량) |

위 필드 외에도 다수의 필드가 존재한다. 가장 중요한 것은 Key(MATNR)이며, 이 Key를 통해 다른 자재 정보 테이블과 연결된다.

#### 2. MAKT(Material Descriptions)
##### 역할
자재의 이름을 다국어로 저장하는 Text Table 역할을 수행한다. 영어, 한국어 등 언어별로 각각 저장된다.
##### 필드

| Field        | Description    | example       |
| ------------ | -------------- | ------------- |
| MATNR  (Key) | 자재 번호          | FURN-001      |
| SPRAS  (Key) | 언어키            | E(영어), 3(한국어) |
| MAKTX        | 자재 정보          | 프리미엄 소파       |
| MAKTG        | 자재정보 UPPERCASE | PREMIUM SOFA  |

#### 3. MARM(Units of Measure)
##### 역할
기본 단위(EA) 외에 박스(BOX), 팔레트(PAL) 등으로 단위를 변환할 때 사용하는 비율 정보 테이블이다. 기업 내 새로운 단위를 기존 단위를 활용하여 변환할 수 있다.
##### 필드

| Field        | Description      | example                             |
| ------------ | ---------------- | ----------------------------------- |
| MATNR  (Key) | 자재 번호            | FURN-001                            |
| MEINH  (Key) | 대체 단위            | BOX, PAL 등 새로운 단위의 정의               |
| .INCLUDE     | Units of Measure | length, width, height 등 다양한 단위 정보  |

#### 4. MARC(Plant Data for Material)
##### 역할
공장(Plant)별 자재 데이터. 특정 공장에서 이 자재를 어떻게 생산하고 구매할 것인지(MRP)에 대한 정보를 담고 있다.

> MRP : Material Requirement Planning (자재 소요량 계획)     

##### 필드

| Field        | Description | example            |
| ------------ | ----------- | ------------------ |
| MATNR  (Key) | 자재 번호       | FURN-001           |
| WERKS  (Key) | Plant 공장 코드 | 1000 서울공장          |
| DISMM        | MRP 유형      | 재고 소진 시 자동 발주 여부   |
| BESKZ        | 조달 유형       | E(자체 생산), F(외부 구매) |
| PLIFZ        | 계획 납품 일수    | 외부 조달 시 소요일수       |

동일한 자재라도 Plant에 따라 직접 생산할지(PP), 외부에서 구매할지(MM) 등의 기준이 다르며, 이를 MARC 테이블에서 관리한다.

#### 5. MARD(Storage Location Data)
##### 역할
저장 위치별 자재 데이터. 공장 안에서도 특정 창고(Storage) 단위로 관리되는 정보다. 재고 실사(기업이 창고에 보관 중인 실제 재고자산 수량을 조사하여 전산 장부상 수량과 일치하는지 확인하고 조정하는 업무) 및 재고 위치와 직접적으로 관련된다.

##### 필드

| Field        | Description | example                |
| ------------ | ----------- | ---------------------- |
| MATNR  (Key) | 자재 번호       | FURN-001               |
| WERKS  (Key) | Plant 공장 코드 | 1000 서울공장              |
| LGORT  (Key) | 창고 코드       | 1001 완제품 창고, 1002 불량창고 |
| LGPBE        | Storage Bin | 창고 안에서 특정 선반/빈 위치      |

Profit Center(수익센터), Valuated Unrestricted-Use Stock(평가된 가용 재고) 등의 정보도 함께 저장된다.

#### 6. MVKE(Sales Data for Material)
##### 역할
영업 조직별 자재 데이터. 이 자재를 영업 조직(Sales Org)과 유통 경로(Distribution Channel)별로 어떻게 판매할 것인지(SD)에 대한 정보를 담고 있다.
##### 필드

| Field        | Description | example                    |
| ------------ | ----------- | -------------------------- |
| MATNR  (Key) | 자재 번호       | FURN-001                   |
| VKORG  (Key) | 영업 조직       | 1000 한국 영업본부               |
| VTWEG  (Key) | 유통경로        | 10 직영점, 20 온라인몰, 30 렌탈/박람회 |
| DWERK        | 납품 Plant    | 주문 입력 시 출고될 공장            |
| MTPOS        | 품목 범주 그룹    | 영업 오더 입력 시 적용될 로직         |

판매와 직결된 테이블로, 특정 제품을 직영점에서 판매할지 온라인 몰에서 판매할지 등의 유통 정보를 저장한다.

#### 7. MBEW(Material Valuation)
##### 역할
자재 평가 및 회계 데이터. 재무(FI)와 원가(CO) 모듈의 핵심으로, 가치(금액)에 대한 정보를 Plant 단위로 저장한다.
##### 필드

| Field        | Description | example                   |
| ------------ | ----------- | ------------------------- |
| MATNR  (Key) | 자재 번호       | FURN-001                  |
| BWKEY  (KEY) | 평가 영역       | 보통 Plant Code와 동일         |
| BWTAR (Key)  | 평가 종류       | 평가 방식(자체 생산, 외부 조달 등)    |
| BKLAS        | 평가 클래스      | G/L 계정 매핑(완제품 계정, 원자재 계정) |
| VPRSV        | 가격 제어 지시자   | S(표준 원가), V(이동평균원가)       |

#### 8. MEAN(International Article Numbers)
##### 역할
자재에 부착된 바코드(EAN/UPC 번호)를 관리하는 테이블이다. 창고, 가구 매장 등에서 바코드 스캔 시 필요하다.
##### 필드

| Field        | Description | example                      |
| ------------ | ----------- | ---------------------------- |
| MATNR  (Key) | 자재 번호       | FURN-001                     |
| MEINH  (KEY) | 단위          | EA, BOX                      |
| LFNUM (Key)  | 일련번호        | 00001                        |
| EAN11        | 국제 상품번호     | 바코드 숫자                      |
| HPEAN        | 주 바코드 여부    | 이 단위의 메인 바코드인지 여부 (YES/NO)  |

#### 자재 코드 조회 흐름 예시
MARA(기준 자재 코드) → MAKT(자재명) → MARC(소속 공장) → MBEW(원가 정보)
이처럼 여러 테이블을 조인하여 종합적인 자재 조회가 가능하다.


## Vendor Create(거래처)

### 거래처
제조 회사의 원자재 공급사, 외주 설치 업체 등이 모두 Vendor에 해당한다. Vendor 데이터는 Client → Company Code → Purchasing Org 수준으로 나뉘어 관리된다.

> **Company Code(회사코드)**
> - 장부를 작성하는 독립적인 회계 단위 (최상위 조직 단위)
> - SAP 시스템 내에서 독립적인 하나의 법인을 정의한다.
> - 대차대조표(B/S)와 손익계산서(P/L)를 도출할 수 있는 최소 단위다.
> - 모든 전표는 특정 Company Code에 귀속된다.
> - 보통 알파벳과 숫자를 조합한 4자리로 구성된다.

#### 1. LFA1(Vendor Material Data - General)
##### 역할
거래처의 일반(공통) 데이터를 저장한다.
##### 필드

| Field       | Description    | example     |
| ----------- | -------------- | ----------- |
| LIFNR (KEY) | 거래처 번호         | V-1000 도사목재 |
| NAME1/NAME2 | 거래처 이름         | 도사목재 주식회사   |
| ORTO1       | 도시             | guri        |
| PSTLZ       | 우편번호           | 12345       |
| STRAS       | 도로명 주소         | 동구릉로 어쩌구    |
| STCD1/STCD2 | 사업자/법인등록번호    | -           |

#### 2. LFB1(Vendor Material Data - Company Code Data)
##### 역할
회사 코드별 재무 데이터를 저장한다. 재무 부서에서 해당 거래처와의 대금 정산 방식을 세팅하며, 특정 회사코드(BUKRS)에 종속된다. FI 모듈과 가장 밀접한 테이블이다.
##### 필드

| Field       | Description                   | example             |
| ----------- | ----------------------------- | ------------------- |
| LIFNR (KEY) | 거래처 번호                        | V-1000 도사목재         |
| BUKRS (KEY) | 회사 코드                         | 1000 도사가구 한국법인      |
| AKONT       | 조정 계정(Reconciliation Account) | G/L의 외상매입금 계정과 연결   |
| ZTERM       | 지급 조건                         | 월말 마감 후 30일 뒤 현금 지급 |

#### 3. LFBK(Bank Details)
##### 역할
거래처 은행 계좌 정보를 저장한다. 대금 지급을 위해 필수적이며, 한 거래처가 여러 은행 계좌를 가질 수 있음에 유의한다.
##### 필드

| Field       | Description | example        |
| ----------- | ----------- | -------------- |
| LIFNR (KEY) | 거래처 번호      | V-1000 도사목재    |
| BANKS (KEY) | 은행 국가       | KR(한국)         |
| BANKL (KEY) | 은행 번호       | 004(국민은행)      |
| BANKN (KEY) | 계좌 번호       | 94320211111111 |
| KOINH       | 예금주명        | 한도사            |

#### 4. LFM1(Purchasing Organization Data)
##### 역할
구매 조직별 데이터. 자재 구매(MM) 조건을 세팅하며, 특정 구매조직(EKORG) 단위로 관리된다.
##### 필드

| Field       | Description | example     |
| ----------- | ----------- | ----------- |
| LIFNR (KEY) | 거래처 번호      | V-1000 도사목재 |
| EKORG (KEY) | 구매 조직       | P100 본사 구매팀 |
| WAERS       | 구매 주문 통화    | KRW, USD    |
| ZTERM       | 구매 조건       |             |
| INCO1/INCO2 | 인코텀즈        | FOB 부산항     |

#### 5. LFC1(Transaction Figures)
##### 역할
거래처 FI 잔액 데이터. 거래처와의 회계 연도별 누적 잔액을 요약하여 보여주는 테이블이다.
##### 필드

| Field       | Description              | example        |
| ----------- | ------------------------ | -------------- |
| LIFNR (KEY) | 거래처 번호                   | V-1000 도사목재    |
| BUKRS (KEY) | 회사 코드                    | 1000 도사가구 한국법인 |
| GJAHR (KEY) | 회계 연도                    | 2026           |
| UM01S~UM12S | 1~12월 차변(Debit) 합계 금액    |                |
| UM01H~UM12H | 1~12월 대변(Credit) 합계 금액   |                |

#### 거래처 흐름 예시
도사목재(LFA1)에게 본사 구매팀(LFM1)이 KRW로 자재를 구매하면, 재무팀(LFB1)이 지정된 국민은행 계좌(LFBK)로 30일 뒤 외상매입금(LFB1-AKONT)을 입금한다.

## 마무리
대표적인 SAP Standard Table 중 자재(Material)와 거래처(Vendor) 관련 핵심 테이블의 역할과 필드를 살펴보았다. 이후 다룰 예정인 주요 데이터 카테고리는 다음과 같다.

1. BOM (소요량)
2. Production Order (생산 오더)
3. Info Record (구매 정보)
4. Price (단가)
5. Planned Order (계획 오더)
6. Purchase Requisition (구매 요청)
7. Purchase Order (구매 오더)
8. Goods Receipt (입고)
9. Goods Issue (출고)
10. Invoice Receipt (송장)
11. Period Closing (기간 마감)

순차적으로 포스팅을 진행할 예정이다.