# iktube-2024ver

**https://iktube.netlify.app/**

## 프로젝트 소개

React와 Tailwind CSS를 사용해 구현한 YouTube 클론 프로젝트입니다.

이 프로젝트는 단순히 동작하는 결과물을 넘어서, **소프트웨어 아키텍처와 기능 설계의 실험적 기반**으로 활용하기 위해 개발되었습니다.

- 검색, 동영상 재생, 채널 동영상 조회 등의 주요 기능을 구현하며, React 생태계의 기본 기술들을 체험했습니다.
- 향후 다양한 아키텍처와 기술(예: 상태 관리, 성능 최적화, 테스트 자동화)을 적용하여 확장 가능성을 염두에 두고 설계되었습니다.
- 이 프로젝트를 통해 플랫폼 도메인 기업에서 요구하는 실무 역량(설계, 유지보수성, 코드 품질)을 체계적으로 심도 학습하고자 합니다.

현재는 기본 기능을 충실히 구현하는 데 초점을 맞췄으며, 앞으로 다양한 기술 실험과 리팩토링의 기반으로 발전시킬 계획입니다.

## 기술 스택

- **Frontend**: React, Tailwind CSS
- **API**: YouTube Data API v3, Axios
- **Routing**: React Router
- **상태 관리**: TanStack Query, Context API
- **설계 패턴**: Dependency Injection (DI), Custom Hooks
- **배포**: Netlify

## 주요 기능

- 검색 및 동영상 리스트 조회
- 채널별 동영상 보기
- 동영상 재생 페이지
- 반응형 디자인
- **동영상 검색**: YouTube Data API 호출 및 TanStack Query로 상태 관리.
- **시간 포맷팅**: timeago.js를 사용해 동영상 업로드 시간 표시.
- **동영상 재생**: iframe을 활용해 YouTube 플레이어 임베딩.
- **API 테스트**: Postman으로 API 테스트 및 검증.

## 설치 및 실행

1. **레포지토리 클론**:
   ```bash
   git clone https://github.com/username/project-name.git
   cd project-name
   ```
2. **종속성 설치**:
   ```bash
   yarn install
   ```
3. **환경 변수 설정: .env 파일에 아래 내용을 추가하세요.**:
   ```bash
   REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
   ```
4. **로컬 서버 실행**:
   ```bash
   yarn start
   ```

## 업데이트 내역

#### v1.0.0

- 기본 검색 및 동영상 재생 기능 추가
- 반응형 UI 구현
- Shorts와 일반 동영상 구분 기능 추가
- Netlify 배포 설정 완료

- React hooks
  - closure
  - usecallback
    - Memoization
- Lazy Initialization
