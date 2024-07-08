# 폴더 구조 정리

## 폴더 구조

```
SNU_GRADUART/
├── node_modules/
├── public/
│   ├── assets/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── pull_request_template.md
└── vite.config.js
```

## 폴더 구조 설명

### node_modules/:

- npm을 통해 설치된 모든 패키지가 저장되는 폴더
- `git pull origin {브랜치명}` 후 `npm install` 필수!

### public/assets/:

- 공개적으로 접근 가능한 정적 파일들을 저장하는 폴더
- 정적 이미지 파일 저장(동적 이미지[작품 사진] 제외 모든 이미지)

### src/:

- 소스 코드 파일들이 저장되는 폴더

### components/:

- 재사용 가능하거나 컴포넌트 분리용 React 컴포넌트 파일들을 저장하는 폴더.
- Main 페이지에서 분리할 떄는 Main 폴더 안에 컴포넌트 파일을 생성 후 코드 작성
- 여기에 컴포넌트 생성 후 pages 폴더로 import

### pages/:

- 각각의 페이지를 담당하는 React 컴포넌트 파일들이 저장되는 폴더
- 각 페이지(랜딩, 과별, 상세 등등...)

### App.jsx:

- 주요(메인) 애플리케이션 컴포넌트 파일

### main.jsx:

- 애플리케이션의 진입점 파일

### .env:

- 환경 변수 설정 파일
- VITE_PUBLIC_URL : public/assets 안에 있는 파일을 가져올 때 사용
  - `${import.meta.env.VITE_PUBLIC_URL}/assets/image.png` 로 가져올 수 있음.
- 이 외 API 등이 저장

### .eslintrc.cjs:

- ESLint 설정 파일

### .gitignore:

- Git에서 추적하지 않을 파일 및 폴더 목록을 정의하는 파일

### index.html:

- 메인 HTML 파일로, 애플리케이션이 로드될 때 사용

### package-lock.json:

- 프로젝트의 정확한 의존성 트리 정보를 기록하는 파일

### package.json:

- 프로젝트의 메타데이터 및 의존성 정보가 기록된 파일

### pull_request_template.md:

- 풀 리퀘스트를 생성할 때 사용할 템플릿 파일

### vite.config.js:

- Vite 설정 파일
