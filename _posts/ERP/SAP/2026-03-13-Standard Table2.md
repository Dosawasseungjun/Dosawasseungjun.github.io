---
layout : post
title: "Standard Table(BOM, Info Record, Production Order 편)"
date: 2026-03-13 01:00:00 +0900
categories: [ERP, SAP]
tags: [SAP, ABAP, DB, TABLE, BOM, PP, MM]
---

## 개요
이전 포스팅에서 마스터 데이터의 핵심인 자재(Material)와 거래처(Vendor) 테이블을 살펴보았다. 이번에는 이 마스터 데이터를 활용하여 제품을 구성하는 **BOM(자재 명세서)**, 구매 단가와 조건을 관리하는 **Info Record(구매 정보 레코드)**, 그리고 실제 생산을 지시하는 **Production Order(생산 오더)** 관련 핵심 테이블을 정리한다.

## BOM (Bill of Materials)

### BOM이란?
BOM은 '자재 명세서' 또는 '자재 소요량 계획'으로 불리며, 특정 완제품이나 반제품을 만들기 위해 어떤 자재가 얼만큼 필요한지 정의한 레시피(Recipe)와 같다.

#### 1. STKO (BOM Header)
##### 역할
BOM의 헤더 데이터를 저장한다. 특정 완제품의 BOM 생성 상태, 기준 수량 등 전체적인 BOM의 기본 정보를 담고 있다.
##### 필드

| Field       | Description | example               |
| ----------- | ----------- | --------------------- |
| STLTY (KEY) | BOM 범주      | M(자재 BOM), E(장비 BOM)  |
| STLNR (KEY) | BOM 번호      | 00000001              |
| STLAL (KEY) | 대안 BOM (Alternative BOM)      | 01, 02  |
| STKOZ (KEY) | 내부 카운터 (Internal Counter)      |  	00000001   |
| BMENG       | 기준 수량       | 1 (1개를 만들 때 필요한 기준) |
| BMEIN       | 기본 단위       | EA                    |
| STLST       | BOM 상태      | 1(활성), 2(비활성)         |

#### 2. STPO (BOM Item)
##### 역할
BOM의 아이템(구성품) 데이터를 저장한다. 헤더에 묶인 자재를 구성하는 실제 하위 자재들과 그 소요량을 나타낸다.
##### 필드

| Field        | Description | example               |
| ------------ | ----------- | --------------------- |
| STLTY  (KEY) | BOM 범주      | M(자재 BOM)             |
| STLNR  (KEY) | BOM 번호      | 00000001              |
| STLKN  (KEY) | BOM 항목 노드   | 00000001              |
| STPOZ  (KEY) | 내부 항목 카운터   | 00000001              |
| IDNRK        | 구성품 자재 번호  | WOOD-001 (소파에 들어가는 목재) |
| MENGE        | 구성품 수량      | 2.5                   |
| MEINS        | 구성품 단위      | M (미터)                |

##### 시나리오
MAST(자재-BOM 연결)에서 '프리미엄 소파'의 레시피 번호를 찾으면, STKO(BOM 헤더)가 소파 1개(기준수량)를 만들 때라고 선언한다. 그러면 STPO(BOM 아이템)가 "목재 2.5개, 가죽 5장(구성품)"이 필요하다고 리스트를 뽑는다.

## Info Record (구매 정보 레코드)

### Info Record란?
특정 자재(Material)를 특정 거래처(Vendor)로부터 구매할 때 적용되는 단가, 조건, 리드타임 등을 기록해둔 마스터 데이터다. 구매 오더(PO) 생성 시 이 데이터를 바탕으로 단가와 조건이 자동으로 끌려온다.

#### 1. EINA (Purchasing Info Record: General Data)
##### 역할
인포 레코드의 일반 데이터를 저장한다. 특정 거래처와 특정 자재 간의 일반적인 관계를 정의하며, 조직(Plant/Purchasing Org)과 무관하게 공통으로 적용되는 정보다.
##### 필드

| Field       | Description | example            |
| ----------- | ----------- | ------------------ |
| INFNR (KEY) | 인포 레코드 번호   | 5300000001         |
| MATNR       | 자재 번호       | WOOD-001           |
| LIFNR       | 공급업체(거래처) 번호| V-1000             |
| MEINS       | 기본 단위       | EA                 |
| URZLA       | 원산지 국가      | KR (한국)           |

#### 2. EINE (Purchasing Info Record: Purchasing Organization Data)
##### 역할
구매 조직 및 플랜트 수준의 인포 레코드 데이터를 저장한다. 실제 구매 시 적용되는 단가, 납품 소요일수 등의 구매 조건이 포함된다.
##### 필드

| Field       | Description | example            |
| ----------- | ----------- | ------------------ |
| INFNR (KEY) | 인포 레코드 번호   | 5300000001         |
| EKORG (KEY) | 구매 조직       | P100               |
| WERKS (KEY) | 플랜트         | 1000               |
| APLFZ       | 계획 납품 일수    | 5 (발주 후 납품까지 5일 소요)|
| NETPR       | 순 단가        | 10,000             |
| WAERS       | 통화          | KRW                |

#### 3. EIPA (Order Price History: Info Record)
##### 역할
인포 레코드의 구매 단가 이력(Price History)을 저장한다. 과거에 특정 거래처에서 자재를 얼마에 구매했는지에 대한 PO(구매 오더) 단위의 단가 변동 내역을 추적할 수 있다.
##### 필드

| Field       | Description | example            |
| ----------- | ----------- | ------------------ |
| INFNR (KEY) | 인포 레코드 번호   | 5300000001         |
| EBELN (KEY) | 구매 문서 번호    | 4500000010 (PO 번호) |
| EBELP (KEY) | 구매 문서 품목 번호 | 00010              |
| PREIS       | 순 가격        | 9,500              |
| PEINH       | 가격 단위       | 1                  |

> 나사나 볼트같은 저렴한 물건은 100개당 1000원 이런식으로 가격을 정하기도 한다.       
> 이때, 100개에 해당하는 값이 PEINH이다.      

#### 4. A017 (Material Info Record - Plant-Specific)
##### 역할
플랜트 종속적인(Plant-Specific) 자재 인포 레코드의 조건(Condition) 데이터를 저장하는 테이블이다. 단가 결정 로직(Pricing)에서 사용되며, 특정 플랜트에 국한된 단가 및 할인 정보를 매핑한다.
##### 필드

| Field       | Description | example            |
| ----------- | ----------- | ------------------ |
| KAPPL (KEY) | 응용 프로그램    | M (구매)             |
| KSCHL (KEY) | 조건 유형       | PB00 (총 가격)       |
| LIFNR (KEY) | 공급업체 번호    | V-1000             |
| MATNR (KEY) | 자재 번호       | WOOD-001           |
| EKORG (KEY) | 구매 조직       | P100               |
| WERKS (KEY) | 플랜트         | 1000               |
| KNUMH       | 조건 레코드 번호  | 0000012345 (KONP 테이블과 조인) |

#### 5. A018 (Material Info Record)
##### 역할
플랜트에 종속되지 않은, 구매 조직(Purchasing Org) 레벨의 자재 인포 레코드 조건(Condition) 데이터를 저장한다. A017 테이블과 구조는 유사하나 플랜트(WERKS) 기준이 제외된다.
##### 필드

| Field       | Description | example            |
| ----------- | ----------- | ------------------ |
| KAPPL (KEY) | 응용 프로그램    | M (구매)             |
| KSCHL (KEY) | 조건 유형       | PB00 (총 가격)       |
| LIFNR (KEY) | 공급업체 번호    | V-1000             |
| MATNR (KEY) | 자재 번호       | WOOD-001           |
| EKORG (KEY) | 구매 조직       | P100               |
| KNUMH       | 조건 레코드 번호  | 0000012346 (KONP 테이블과 조인) |

##### 시나리오
EINA(일반 정보)에 등록된 '도사목재'로부터 EINE(구매조직 데이터)에 설정된 10,000원(순단가)으로 발주를 내려 한다. 이때 시스템은 EIPA(단가 이력)를 뒤져 지난 달 가격을 참고하며, 최종적으로 A017/A018(조건 테이블)에 저장된 할인율을 적용해 최적의 구매가를 결정한다.

## Production Order (생산 오더)

### Production Order란?
PP(생산 계획) 모듈의 핵심 트랜잭션 데이터로, 공장(Plant)에서 특정 자재를 언제, 얼마만큼, 어떤 공정(Routing)을 거쳐 생산하라는 공식적인 작업 지시서다.

#### 1. AUFK (Order Master Data)
##### 역할
오더 마스터 데이터(생산 오더 공통 헤더)를 저장한다. 생산 오더뿐만 아니라 CO(관리회계)의 내부 오더(Internal Order) 등 다양한 오더 유형의 헤더 역할을 수행한다.
##### 필드

| Field       | Description | example            |
| ----------- | ----------- | ------------------ |
| AUFNR (KEY) | 오더 번호       | 1000001            |
| AUART       | 오더 유형       | PP01(표준 생산 오더)    |
| AUTYP       | 오더 범주       | 10(생산 오더), 40(공정 오더)|
| WERKS       | 플랜트         | 1000               |
| KTEXT       | 오더 내역       | 프리미엄 소파 생산 지시      |

#### 2. AFKO (Order header data PP orders)
##### 역할
생산 오더(PP)에 특화된 헤더 데이터를 저장한다. 공통 헤더인 AUFK와 1:1로 매핑되며, 생산과 직접적으로 관련된 일정, 라우팅(Routing), 기준 수량 등을 관리한다.
##### 필드

| Field       | Description | example            |
| ----------- | ----------- | ------------------ |
| AUFNR (KEY) | 오더 번호       | 1000001            |
| GLTRP       | 기준 완료일      | 2026-03-20         |
| GSTRP       | 기준 시작일      | 2026-03-15         |
| GAMNG       | 총 오더 수량     | 100                |
| PLAFN       | 계획 오더 번호    | 0000054321         |

#### 3. AFPO (Order item)
##### 역할
생산 오더의 아이템(품목) 데이터를 저장한다. 오더에 따라 실제 생산되어 입고될 자재, 생산 수량, 저장될 창고 위치 등 개별 품목 라인의 정보를 담고 있다.
##### 필드

| Field        | Description | example            |
| ------------ | ----------- | ------------------ |
| AUFNR  (KEY) | 오더 번호       | 1000001            |
| POSNR  (KEY) | 오더 품목 번호   | 0001               |
| MATNR        | 자재 번호       | FURN-001           |
| PSERK        | 품목 수량       | 100                |
| LGORT        | 저장 위치(창고)  | 1001 (완제품 창고)      |

##### 시나리오
AUFK(오더 마스터)가 '소파 생산'이라는 지시서 번호를 따면, AFKO(생산 헤더)가 "3월 20일까지 100개 완료해!"라고 일정을 잡는다. 생산이 완료되면 AFPO(오더 품목)가 다 만들어진 소파 100개는 1001번 완제품 창고로 입고한다.

## 마무리
이번에는 자재와 거래처 정보를 엮어주는 BOM과 Info Record, 그리고 생산을 지시하는 Production Order의 핵심 테이블을 살펴보았다. 

다음 포스팅에서는 이어서 구매 프로세스의 핵심인 **Purchase Requisition (구매 요청)과 Purchase Order (구매 오더)** 관련 테이블을 정리할 예정이다.