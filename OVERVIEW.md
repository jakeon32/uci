# WHOOP UCI MTB World Series 2026 - 사이트 개요

## 프로젝트 정보

**이벤트명**: WHOOP UCI Mountain Bike World Series
**개최지**: 용평, 대한민국
**일시**: 2026년 5월 1-3일
**프로젝트 유형**: 정적 웹사이트 (Static Site)

---

## 파일 구조

```
static-site/
├── index.html          # 메인 페이지 (5,208 bytes)
├── ktx.html           # 교통 안내 페이지 (4,535 bytes)
├── script.js          # JavaScript 기능 (1,792 bytes)
├── styles.css         # 스타일시트 (14,582 bytes)
└── images/            # 이미지 리소스 (14개 파일)
    ├── Logo.png
    ├── favicon.png
    ├── main-pic01.jpg
    ├── main-pic02.jpg
    ├── transport.png
    ├── accommodation.png
    ├── reservation.png
    ├── seemore.png
    ├── arrow-right-outline.png
    ├── mail.png
    ├── time.png
    ├── HowtoGet.jpg
    ├── transportation.jpg
    └── Whoop.png
```

---

## 주요 페이지

### 1. 메인 페이지 (index.html)

#### 헤더
- 로고 (WHOOP UCI)
- 데스크톱 네비게이션: Transportation, Accommodation
- 모바일 햄버거 메뉴

#### 히어로 섹션
- 자동 슬라이드쇼 (6초 간격, 2개 이미지)
- 타이틀: "WHOOP UCI Mountain Bike World Series"
- 서브타이틀: "YONGPYONG, KOREA 2026.05.01-03"

#### 안내 카드 (2개)
1. **Transportation 카드**
   - 교통 옵션 안내
   - ktx.html로 연결
   - 아이콘: transport.png

2. **Accommodation 카드**
   - 숙박 예약 안내
   - 외부 예약 사이트 연결 (https://2026uci.mice.link/booking/PXDKSPY)
   - 아이콘: accommodation.png

#### 정보 패널 (2개)
1. **How to Get to Gangwon**
   - 강원도 관광 정보 (https://www.gangwon.to/en)
   - 배경: HowtoGet.jpg
   - 핑크 오버레이 (rgba(254, 0, 86, 0.95))

2. **WHOOP UCI MTB World Series Official Site**
   - 공식 사이트 연결 (https://www.ucimtbworldseries.com/)
   - 배경: Whoop.png
   - 다크 오버레이 (rgba(31, 31, 31, 0.95))

#### 연락처 섹션
- 이메일: uci_korea@smartix.co.kr
- 운영시간: 월-금 9:00-18:00 (KST)

#### 푸터
- Copyright © GroundK. All rights reserved.

---

### 2. 교통 안내 페이지 (ktx.html)

#### 히어로 섹션
- 타이틀: "Transportation"
- 서브타이틀: "KTX and Private Service Guide for Convenient Travel"
- 배경: transportation.jpg (고정 배경, 그라디언트 오버레이)

#### Private Move 섹션
- 프리미엄 샤또어 서비스
- 특징:
  - Door-to-Door: 공항/집에서 리조트 로비까지 논스톱
  - Premium Comfort: 최신 밴/SUV, 전문 기사
- CTA 버튼: "Book Private Transfer" (파란색 #0078C7)

#### KTX & 셔틀버스 안내
- **KTX 강릉선 정보**
  - 노선: KTX 강릉선
  - 하차역: 진부역 (오대산)
  - 소요시간: 약 1.5~2시간 (서울/청량리 출발)

- **진부역 로컬 이동**
  - 진부역 셔틀버스 (모나평)
  - 택시 이용 (약 20분, 진부 택시: 033-335-0088)

- CTA 버튼: "KTX Booking Site" (검은색)

#### 주요 안내사항
- 모든 교통 스케줄은 계절별로 변동 가능
- 출발 전 공식 채널 확인 필수
- 리조트 문의: 1588-0009

---

## JavaScript 기능 (script.js)

### 1. 이미지 슬라이드쇼
- 대상: `.hero-slides .slide` 요소들
- 전환 간격: 6초
- 전환 효과: opacity 1.2초 ease
- 자동 순환

### 2. 모바일 메뉴
- 햄버거 버튼 클릭 시 메뉴 토글
- 닫기 버튼으로 메뉴 닫기
- 메뉴 외부 클릭 시 자동 닫기
- ARIA 속성 관리 (aria-expanded, aria-hidden)

---

## 스타일링 (styles.css)

### CSS 변수
```css
--container-w: 1280px;
--accent: #fe0056;      /* 핑크 (메인 액센트) */
--muted: #bdbdbd;       /* 회색 (부가 텍스트) */
--card-radius: 10px;
```

### 폰트
- **Pretendard** (한글 최적화 웹폰트)
- CDN: jsdelivr

### 주요 색상
- 액센트: #FE0056 (핑크)
- Private Move: #0078C7 (파란색)
- 다크: #111, #1f1f1f, #343537
- 배경: #fff (흰색)

### 반응형 브레이크포인트
- **768px 이상**: 데스크톱
  - 수평 네비게이션 표시
  - 햄버거 메뉴 숨김
  - 카드 그리드 2열

- **767px 이하**: 모바일/태블릿
  - 수평 네비게이션 숨김
  - 햄버거 메뉴 표시
  - 카드 세로 스택
  - 패널 전체 너비

- **480px 이하**: 초소형 모바일
  - 폰트 크기 추가 축소
  - 패딩 조정

- **375px 이하**: 극소형 모바일
  - 히어로 타이틀 36px
  - 단어 강제 줄바꿈

### 호버 효과

#### 네비게이션 링크
- 하단 밑줄 애니메이션 (중앙에서 좌우로 확장)
- 데스크톱: #FE0056 (핑크)
- 모바일: #B2FE00 (라임)

#### 카드
- `transform: scale(1.02)` (확대)
- 그림자 강화

#### 패널
- 배경 이미지 줌인 (`scale(1.1)`)
- 오버레이 투명도 증가 (0.95 → 0.65)

### 특수 효과
- 히어로 슬라이드: 다크 그라디언트 오버레이
- 교통 페이지 배경: 고정 배경 (fixed), 복합 그라디언트
- 카드 푸터: 다크 배경 (#1f1f1f)
- 연락처 섹션: 검은색 배경 (#111)

---

## 접근성 (Accessibility)

- ARIA 속성 사용:
  - `aria-expanded`: 메뉴 확장 상태
  - `aria-hidden`: 모바일 메뉴 표시 상태
  - `aria-controls`: 메뉴 컨트롤 연결
  - `aria-label`: 닫기 버튼 레이블
- `.visually-hidden` 클래스: 스크린 리더용 텍스트
- `alt` 속성: 모든 이미지에 적용
- 외부 링크: `rel="noopener"` 보안 속성

---

## 외부 링크

1. **숙박 예약**: https://2026uci.mice.link/booking/PXDKSPY
2. **강원도 관광**: https://www.gangwon.to/en
3. **WHOOP UCI 공식 사이트**: https://www.ucimtbworldseries.com/
4. **이메일**: uci_korea@smartix.co.kr
5. **KTX 예약**: 링크 미설정 (버튼만 존재)

---

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables, Transitions
- **JavaScript (Vanilla)**: IIFE 패턴, DOM 조작
- **폰트**: Pretendard (CDN)
- **반응형**: Mobile-first approach

---

## Git 상태

### 현재 브랜치
- `main`

### 수정된 파일
- ✏️ index.html
- ✏️ ktx.html
- ✏️ script.js
- ✏️ styles.css

### 삭제된 파일
- ❌ images/main-pic02.png
- ❌ issue.png
- ❌ test.html

### 추가된 파일
- ➕ images/main-pic02.jpg (PNG → JPG 변환)

### 최근 커밋
- `f98cf15` - Initial commit from local project

---

## 개선 가능한 부분

1. **기능 링크 추가**
   - Private Transfer 예약 링크
   - KTX 예약 사이트 링크

2. **SEO 최적화**
   - meta description 추가
   - Open Graph 태그
   - Structured data (JSON-LD)

3. **성능 최적화**
   - 이미지 최적화 (WebP 포맷)
   - 레이지 로딩
   - CSS/JS 압축

4. **다국어 지원**
   - 한국어/영어 전환 기능
   - lang 속성 동적 변경

5. **애니메이션 개선**
   - 스크롤 트리거 애니메이션
   - 페이지 전환 효과

---

**문서 작성일**: 2025-11-20
**프로젝트 소유**: GroundK
