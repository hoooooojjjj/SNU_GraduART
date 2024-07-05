# 📖 SNU_GraduART 서비스앱 README

![readme_mockup2](https://user-images.githubusercontent.com/112460466/210706312-6a44b60d-a42e-4210-b334-9e5983f70fb3.png)

- 배포 URL :
- 레파지토리 링크 : https://github.com/hoooooojjjj/SNU_GraduART

<br>

## 개발 컨벤션

### 개발 과정에서 지켜야 할 사항

#### <code>git pull</code> 이후

- <strong>pull 하고 나서 꼭 <code>npm install</code> 기계적으로 해주기.</strong>
  - Why?
  - ⇒ 다른 사람이 개발하다가 설치한 npm 라이브러리는 push 할때 깃허브에 올라가지 않는다.(<code>.gitignore</code> 파일에 <code>node modules</code> 파일이 존재)
  - ⇒ so, pull 할 때 나의 <code>node modules</code> 파일에 라이브러리가 안 들어온다.
  - ⇒ then, <code>npm install</code>을 통해서 깃허브에서 pull을 통해 가져온 <a href="https://1000hg.tistory.com/m/47"><code>package.json</code></a>에 있는 라이브러리를 한번 더 쭉 설치해줘야 한다.
  - ⇒ 그러면 다른 사람이 설치한 거 가져와진다.

#### main 브랜치에 <code>git merge</code> 하기 전

- <strong>절대 main 브랜치에서 작업하지 않도록 주의!!</strong> 주기적으로 로컬에서 브랜치 확인
- <strong>새로운 기능 개발을 할 때에는 꼭 아래 브랜치 전략에 따라 feature 브랜치를 따로 파서 작업 하기 </strong>
- <strong>개발할 때는 git commit을 자주 남기기! </strong>
  - 기능 하나마다 하나의 commit은 절대 안됨
  - commit 주기는 최소한 함수 하나 당 한번의 commit
- <strong>개발이 끝나고 스스로 괜찮다고 느끼면 feature 브랜치에서 main 브랜치로 PR 보내기 </strong>
- <strong>팀원 모두 코드리뷰를 남긴 후 merge </strong>

#### <code>Error</code> 발생 및 해결 안될 시

- 아래 사항 전부 포함해서 알리기
  - 에러 뜬다고 바로 알리지 말고 충분히 고민한 흔적 알려주기. ~~ 부분이 문제인 것 같아서 ~~로 코드를 수정했는데 ~~한 에러가 난다 등.
  - 에러 콘솔 캡쳐 이미지(이왕이면 에러 콘솔 다 보이게)
  - 코드(어디 파일에 어느 줄인지)
  - 뭐하다 안된 건지, 어떤 커밋부터 안됐는지 등 꼭 확인 후 알려주기

### 코드 컨벤션 [<a href="https://velog.io/@bami/Javascript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98">자바스크립트 코딩 컨벤션</a>, <a href="https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-%ED%8E%B8">자바스크립트 스타일 가이드 - 네이밍 컨벤션 편</a>]

#### 명명 규칙

- 대문자와 소문자를 엄격하게 구분한다.
- **_변수명과 함수명은 CamelCase를 따른다. (예. getReady(), colorOfCar)_**
- **_변수의 이름은 명사로 표기한다.(예. count, number)_**
- **_함수의 이름은 동사 또는 동사구문으로 표기한다.(예, findCamera(), getFoo())_**
- 상수명은 대문자의 언더 스코어방식을 이용한다. (예. PI, MAX_VERTEX)
- 이벤트 핸들러 함수는 on으로 시작한다. (예. onClick, onMove)
- **_명명할 때 축약보다는 의미를 알기 쉽게 풀어쓴다._**

#### 변수

- 변수 선언에서 <code>var</code> 대신 <code>let</code> 과 <code>const</code> 를 사용한다.
- **_코드가 실행될 때 재할당이 되어야 하는 변수가 아닌 이상
  <code>const</code>를 사용한다._**

### 커밋 컨벤션 [<a href="https://velog.io/@shin6403/Git-git-%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0">Git | git 커밋 컨벤션 설정하기</a>]

#### Commit 메시지 구조

- 기본 적인 커밋 메시지 구조는 제목,본문,꼬리말 세가지 파트로 나누고, 각 파트는 빈줄을 두어 구분한다.

```
type : subject

body

footer
```

#### Commit Type

- 타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 대문자로 한다.

```
Feat : 새로운 기능 추가
Bug : 버그 발견
Fix : 버그 수정
Docs : 문서 수정
Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
Refactor : 코드 리펙토링
```

#### Subject

- 제목은 최대 50글자가 넘지 않도록 하고 마침표 및 특수기호는 사용하지 않는다.
- 영문으로 표기하는 경우 동사(원형)를 가장 앞에 두고 첫 글자는 대문자로 표기한다.(과거 시제를 사용하지 않는다.)
- 제목은 개조식 구문으로 작성한다. --> 완전한 서술형 문장이 아니라, 간결하고 요점적인 서술을 의미.

```
* Fixed --> Fix
* Added --> Add
* Modified --> Modify
```

#### Body

- 본문은 한 줄 당 72자 내로 작성한다.
- 본문 내용은 양에 구애받지 않고 최대한 상세히 작성한다.
- 본문 내용은 어떻게 변경했는지 보다 무엇을 변경했는지 또는 왜 변경했는지를 설명한다.

#### footer

- 꼬리말은 optional이고 이슈 트래커 ID를 작성한다.
- 꼬리말은 "유형: #이슈 번호" 형식으로 사용한다.
- 여러 개의 이슈 번호를 적을 때는 쉼표(,)로 구분한다.
- 이슈 트래커 유형은 다음 중 하나를 사용한다.
  - Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
  - Resolves: 이슈를 해결했을 때 사용
  - Ref: 참고할 이슈가 있을 때 사용
  - Related to: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)
  - (ex) Fixes: #45 Related to: #34, #23

####  한 커밋에는 한 가지 문제만!

- 추적 가능하게 유지해주기
- 너무 많은 문제를 한 커밋에 담으면 추적하기 어렵다.

#### CLI에서 커밋 메시지 여러 줄로 작성하는 방법

<aside>
✅ **쌍따옴표를 닫지 말고 개행하며 작성 → 다 작성한 후에 쌍따옴표를 닫으면 작성 완료**

```bash
git commit -m "FEAT: 회원가입 기능 추가

- 회원가입 기능 추가"
```

</aside>

### PR 컨벤션 [<a href="https://velog.io/@ye-ji/Git-PR-%EC%9E%98-%EC%93%B0%EB%8A%94-%EB%B0%A9%EB%B2%95">Commit Message / PR 잘 쓰는 방법</a>]

```
### PR 타입(하나 이상의 PR 타입을 선택해주세요)
-[] 기능 추가
-[] 기능 삭제
-[] 버그 수정
-[] 의존성, 환경 변수, 빌드 관련 코드 업데이트

### 반영 브랜치
ex) feat/login -> dev

### 변경 사항
ex) 로그인 시, 구글 소셜 로그인 기능을 추가했습니다.

### 테스트 결과
ex) 베이스 브랜치에 포함되기 위한 코드는 모두 정상적으로 동작해야 합니다. 결과물에 대한 스크린샷, GIF, 혹은 라이브 데모가 가능하도록 샘플API를 첨부할 수도 있습니다.
```

### 브랜치 전략

#### GitHub-flow 전략 [<a href="https://velog.io/@gmlstjq123/Git-Flow-VS-Github-Flow">Git Flow VS Github Flow</a>]

- release 브랜치, main 브랜치와 feature 브랜치를 운용.
  - **release** 브랜치는 배포 단계에서만 사용하는 브랜치.
  - **main** 브랜치는 개발 단계에서 main 역할을 하는 브랜치.
  - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제.

#### dev flow

- ① feature Branch 생성

새로운 기능이나 버그 수정 작업을 수행하기 위해 브랜치를 생성한다.
이 브랜치는 작업의 컨텍스트를 제공하고, 기능의 독립성을 보장한다.

- ② 로컬에서 Commit 작성

로컬 feature Branch에서 변경 사항을 커밋으로 저장한다.
커밋은 작업의 단위이며, 코드 변경 내용을 기록한다.

- ③ main Branch로 Pull Request

변경 사항을 본래 브랜치로 병합하기 위해 풀 리퀘스트를 생성한다.
이를 통해 코드 검토, 토론, 테스트 등을 수행할 수 있다.

- ④ 리뷰 및 피드백

풀 리퀘스트를 생성한 후 다른 개발자들이 코드를 검토하고 피드백을 제공한다.
이를 통해 코드 품질을 높이고 버그를 발견하고 수정할 수 있다.

- ⑤ 병합

풀 리퀘스트가 승인되면 변경 사항을 main 브랜치로 병합한다.
이를 통해 작업한 내용이 제품의 다른 부분과 통합된다.
이후 feature Branch는 삭제한다.

- ⑥ 배포

main에 병합된 변경 사항은 배포를 위한 release 브랜치로 이동하고, 자동 또는 수동으로 배포 프로세스를 시작한다.
배포 단계에서 테스트, 빌드, 배포 작업 등이 수행된다.

### Emotion

Emotion 공식문서(링크된 페이지)에서 자세한 것은 찾아보도록 한다.

<a href="https://emotion.sh/docs/styled">Emotion 공식문서</a>

이 서비스에서는 **_styled components_** 방식을 사용한다.

Emotion은 **_css in js_** 방식으로 스타일 코드에서 js 코드를 사용할 수 있어, 굉장히 유연하다.

스타일 컴포넌트의 변수이름은 '꼭' 대문자로 시작해야한다.

#### 1. 객체 스타일

```
const {변수이름} = styled.{html태그}({
{객체 형태로 코딩}
})
```

예시 )

```
const Child = styled.div({
  color: 'red',
  fontSize : '20px',
})
```

- 객체 스타일을 사용할 때는 lowerCamelcase 로 속성을 작성해야한다. (font-size X , fontSize O)
- 객체 스타일을 사용할 때는 속성값을 문자열로 작성해야 한다.(red X, 'red' O)

#### 2. 문자열 스타일

```
const {변수이름} = styled.{html태그}`
{문자열 형태로 코딩}
`
```

예시 )

```
const Child = styled.div`
  color: red;
  font-size : 20px;
`
```

- 문자열 스타일을 사용할 때는 kebablcase 로 속성을 작성해야한다. (font-size O , fontSize X)
- 문자열 스타일을 사용할 때는 속성값을 문자열로 작성하지 않는다.(red O, 'red' X)

#### 3. js 코드 사용 예시

```
const Child = styled.div({
  color: 'red',
  fontSize : `${20+30}px', // '50px'
})
```

```
const width = 100;
const Child = styled.div`
  color: red;
  width : ${width}px // 100px
```

#### 4. 컴포넌트에서 props를 전달받을 수 있다.

#### 조건부 스타일링이 편리해진다.

```
// Child 컴포넌트에 color props를 'red'로 전달
<Child/ color={'red'}>
```

```
const Child = styled.div((props)=>({
  color: props.color, // 'red'
  fontSize : `${20+30}px',
}))
```

```
// Child 컴포넌트에 isMain props를 true로 전달
<Child/ isMain={true}>
```

```
const Child = styled.div`
  color: ${props => (props.isMain ? 'hotpink' : 'turquoise')}; // 'hotpink'
  width : ${width}px
```

#### 5. Emotion으로 만든 스타일 컴포넌트 사용법

```
import styled from '@emotion/styled'

const Button = styled.button`
  color: ${props => (props.primary ? 'hotpink' : 'turquoise')};
`

const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))

const App = ()=>{
  return(
  <Container column>
    <Button>This is a regular button.</Button>
    <Button primary>This is a primary button.</Button>
  </Container>
  )
}

export default App;
```

#### 애니메이션 사용법

```
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotateInVer = keyframes`
  0% {
    transform: perspective(800px) rotateY(-360deg) translateZ(-200px);
    opacity: 0;
  }
  100% {
    transform: perspective(800px) rotateY(0deg) translateZ(0);
    opacity: 1;
  }
`;

export const LogoStyle = styled.p({
  ...Font_Kanit(),
  fontWeight: 500,
  animation: `${rotateInVer} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both infinite`,
  fontSize: 50,
  position: "relative",
});
```

### firebase

#### 내 블로그에 AboutFirebase 카테고리 참고

<a href="https://blog.naver.com/so_no7">sono의 기술 블로그</a>

## 프로젝트 소개

~

## 프로젝트 개발 과정

### 비지니스 캔버스

![비지니스 캔버스](/src/assets/README/bc.png)

### Userflow

![유저 플로우](/src/assets/README/userFlow.png)

### 와이어프레임

## 프로젝트 레퍼런스

### 피그마 아이콘 관련

- <a href="https://ant.design">AntDisign</a>
- <a href="https://www.svgrepo.com/">svgrepo</a>

### 애니메이션 효과 관련

- 기본 애미메이션 ⇒ <a href="https://animista.net/">animista</a>
- 전환 ⇒ <a href="https://www.moma.org/">MoMA</a>에다가 <a href="https://meum.me/">믐</a>처럼 애니메이션 더하기

### 디자인 전반 관련

- <a href="https://www.wart.co.kr/?gcl_keyword=미술그림&gcl_network=g&gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aEQd8t41Wj5NBY6qeTOTOIewYmO-pe5Cryr6qbOJENjj8VzWDXIWzxoCbuMQAvD_BwE">WeART</a>
- <a href="https://www.getty.edu/art/">게티 메인</a>
- <a href="https://www.getty.edu/art/exhibitions/marvels/">게티 상세</a>
- <a href="https://www.mmca.go.kr/">국립현대미술관</a>
- <a href="https://www.gallery360.co.kr/">갤러리 360</a> ⇒ 메타버스 레퍼런스

### [1] 랜딩페이지

- <a href="https://www.moma.org/">MOMA</a> ⇒ 동양화과/서양화과 등 과별 배너 마련
- <a href="https://qshop.ai/template?utm_source=google&utm_medium=cpc&utm_campaign=search_keyword_webbuilder_dsa&gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aDbvfmaxjXQAlzjqDBpuvQvUMYKRT1SQgvlu6Qk17e27Rc8y3jwHIBoCsKsQAvD_BwE">큐샵</a> > 생활/잡화 > 스페이스 리빙 콜렉션

### [2] 과별페이지

- <a href="https://www.moma.org/calendar/exhibitions/5616">MOMA</a> ⇒ 컨셉이 전체 화면에 보이게

### [3] 각 미술품 상세페이지

- 애니메이션 참고, 액자 형식 + 액자 밑에 해설
- 아래 디자인으로 상세 페이지 만들고 옆으로(carousel) 넘기면 벽과 액자에 애니메이션을 줘서 옆으로 넘어가고 슥슥 넘기면서 1인칭 시점으로 전시회에서 다음 작품으로 넘어가는 것처럼 보이게

  <br/>

  ![상세 페이지 래퍼런스](/src/assets/README/detailReper.png)

### Else

- <a href="https://art.snu.ac.kr/artexhibition/?cate[0]=20231&cate[1]=&cate[2]=&cate[3]=&cate[4]=">서울대학교 미술대학 졸업작품</a>
- 판매자 관련 설문조사 : <a href="https://home.walla.my/">왈라왈라
  </a>
- <a href="https://www.opengallery.co.kr/exhibition/">이런 느낌</a>은 아니었으면...

<br>

## 팀원 구성

<div align="center">

|                                                              **김대유**                                                               |                                                                 **김민석**                                                                  |                                                               **박민서**                                                                |                                                                **유호준**                                                                |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/106502312?v=4" height=150 width=150> <br/> @yeon1615](https://github.com/yeon1615) | [<img src="https://avatars.githubusercontent.com/u/112460466?v=4" height=150 width=150> <br/> @Cheorizzang](https://github.com/Cheorizzang) | [<img src="https://avatars.githubusercontent.com/u/112460506?v=4" height=150 width=150> <br/> @heejiyang](https://github.com/heejiyang) | [<img src="https://avatars.githubusercontent.com/u/76766459?v=4" height=150 width=150> <br/> @journey-ji](https://github.com/journey-ji) |

</div>

<br>

## 1. 개발 환경

- Front : HTML, JavaScript, React, Emotion(css)
- Back-end : firebase
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : 채널톡, Notion
- 서비스 배포 환경 :
- 디자인 : Figma , Mui

  <br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, Emotion

- React

- Emotion

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- airbnb의 코딩 컨벤션을 참고해 사용했고, 예외 규칙은 팀원들과 협의했습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다.

<br>

## 3. 프로젝트 구조

<br>

## 4. 역할 분담

### 김대유

- **UI**
  - 페이지 : 홈, 검색, 게시글 작성, 게시글 수정, 게시글 상세, 채팅방
  - 공통 컴포넌트 : 게시글 템플릿, 버튼
- **기능**
  - 유저 검색, 게시글 등록 및 수정, 게시글 상세 확인, 댓글 등록, 팔로워 게시글 불러오기, 좋아요 기능

<br>
    
### 김민석

- **UI**
  - 페이지 : 프로필 설정, 프로필 수정, 팔로잉&팔로워 리스트, 상품 등록, 상품 수정, 채팅 목록, 404 페이지
  - 공통 컴포넌트 : 탭메뉴, InputBox, Alert 모달, 댓글
- **기능**
  - 프로필 설정 및 수정 페이지 유저 아이디 유효성 및 중복 검사, 상품 등록 및 수정

<br>

### 박민서

- **UI**
  - 페이지 : splash 페이지, sns 로그인 페이지, 로그인, 회원가입
  - 공통 컴포넌트 : 상품 카드, 사용자 배너
- **기능**
  - splash 페이지, sns로그인 페이지, 로그인 유효성 및 중복 검사, 회원가입 유효성 및 중복 검사, 이메일 검증, 프로필 설정, 접근제한 설정

<br>

### 유호준

- **UI**
  - 페이지 : 사용자 프로필 페이지
  - 공통 컴포넌트 : 탑배너, 하단 모달창
- **기능**
  - 팔로우 & 언팔로우, 로그아웃, 하단 모달창, 댓글 삭제, 게시글 삭제, 상품 삭제, 사용자 게시글 앨범형 이미지, 탑 배너 뒤로가기 버튼, Alert 모달

<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-07- ~
- UI 구현 : 2024-07- ~
- 기능 구현 : 2024-07- ~

<br>

### 작업 관리

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.
- 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 GitHub Wiki에 회의 내용을 기록했습니다.

<br>

## 6. 신경 쓴 부분

- [접근제한 설정](https://github.com/likelion-project-README/README/wiki/README-6.%EC%8B%A0%EA%B2%BD-%EC%93%B4-%EB%B6%80%EB%B6%84_%EC%A0%91%EA%B7%BC%EC%A0%9C%ED%95%9C-%EC%84%A4%EC%A0%95)

- [Recoil을 통한 상태관리 및 유지](https://github.com/likelion-project-README/README/wiki/README-6.%EC%8B%A0%EA%B2%BD-%EC%93%B4-%EB%B6%80%EB%B6%84_Recoil%EC%9D%84-%ED%86%B5%ED%95%9C-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%B0%8F-%EC%9C%A0%EC%A7%80)

<br>

## 7. 페이지별 기능

<br>

## 8. 트러블 슈팅

<br>

## 9. 개선 목표

<br>

## 10. 프로젝트 후기

### 김대유

<br>

### 김민석

<br>

### 박민서

<br>

### 유호준
