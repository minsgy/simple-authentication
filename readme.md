## 프로젝트 소개

- 로그인 과정과 이메일 인증 과정을 담은 프로젝트 입니다.
- [URL](https://simple-authentication.vercel.app/login)을 통해 확인하실 수 있습니다.
- `Desktop`과 `Mobile`을 고려하여 반응형 페이지를 구성하였습니다.

## 프로젝트 시작, Testing 실행

1. 패키지 다운로드

```
   yarn install
   npm install
```

2. 프로젝트 시작

```
   yarn dev
   npm run dev
```

- Test code 실행

```
    yarn test
    npm run test
```

## 기술 스택

- `vite` 번들러 기반의 프로젝트입니다. CRA에 비해 빌드 속도가 굉장히 빠르게 구성되어 사용했습니다.
- `TypeScript`를 활용하여 Type 보장을 고려했습니다.
- `react-router-dom`을 통한 SPA Routing을 구현했습니다.
- `eslint` + `prettier` 를 통해 코드의 일관성 및 규칙을 부여했습니다.
- `react-query` + `axios`를 통해 서버 단과의 비동기 통신과 데이터를 관리했습니다.
- `recoil`를 통해 클라이언트 단에 사용 할 token을 전역적으로 활용했습니다. 추가적으로 `react-persist`를 통해 `web storage`에 임의로 토큰을 저장하여 창을 닫아도 로그인이 유지됩니다.
- `CSS-in-JS` 방식의 `styled-components`를 활용해 style를 관리했습니다. JavaScript 비중이 큰 `React`에 style도 일관성을 고려했습니다.
- `react-toastify`를 활용해 사용자에게 현 페이지 상태를 Toast message로 제공합니다.
- `Jest`를 통해 Unit test을 진행했습니다.
- `lodash`를 통해 선언형 방식의 코드를 구현했습니다.

```json
    "@tanstack/react-query": "^4.1.3",
    "axios": "^0.27.2",
    "lodash": "^4.17.21",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "react-toastify": "^9.0.8",
    "recoil": "^0.7.5",
    "recoil-persist": "^4.2.0",
    "styled-components": "^5.3.5"
    "eslint": "^8.21.0",
    "jest": "^28.1.3",
    "prettier": "^2.7.1",
    "vite": "^3.0.0",
```

## 프로젝트 폴더 구조 소개

```javascript
   ┣ 📂@types        // 공통적으로 사용하는 type 정의
   ┣ 📂components    // Atomic 기반의 컴포넌트 구조
   ┃ ┣ 📂atoms       // 최하단 컴포넌트 (UI 역할)
   ┃ ┣ 📂molecules   // atoms를 합성한 컴포넌트
   ┃ ┣ 📂organisms   // molecules를 합성한 컴포넌트
   ┣ 📂constants     // 상수 값 정의
   ┣ 📂hooks         // react-hook 정의
   ┃ ┣ 📂query       // react-query hook
   ┣ 📂layouts       // 로직없는 style 공통 레이아웃
   ┣ 📂pages         // Routing 컴포넌트
   ┣ 📂router        // url path를 정의하는 router
   ┣ 📂store         // client 상태 관리 (recoil)
   ┣ 📂styles        // 공통으로 사용되는 style (theme)
   ┣ 📂tests         // testing 라이브러리 설정 파일
   ┣ 📂utils         // 공통으로 사용되는 기능 (format, validate)
   ┣ 📜App.tsx       // 최상위 컴포넌트
   ┣ 📜index.tsx     // entry point
```

### 프로젝트 구조에 대한 고민

1. Page는 컴포넌트 아닌가?

   - Pages는 컴포넌트로도 사용할 수 있습니다. 그렇지만 routing의 역할을 분명하게 나누기 위해서 구성하게 된 `pages` 폴더의 역할입니다.
   - `Next.js`에서도 이러한 방식으로 `routing`이 구성되는 것을 고려했을 때 라우터되는 컴포넌트를 분리해야 역할에 맞게 분리된다고 생각하여 구성했습니다.

2. `root`단에 너무 많은 폴더?

   - 고민했었던 방법으로 `lib` 폴더를 구성하여 `utils`, `constants` 등 `react` 이 외 기능들을 관리할 지 고민했습니다.
   - 그렇지만 폴더 구조가 깊어질수록 복잡하다고 생각하여 최소화하는 방법으로 구상했습니다.

3. `react-query`를 쉽게 활용하기 위한 custom hook

   - `query` 라이브러리에서 제공하는 hook은 3개의 params를 넣고 관리해야하다보니 코드가 길어지는 문제가 발생했고, 모듈화가 필요로하다 생각했습니다.
   - 그래서 `hooks/query` 분기를 통해 각 api별 hook을 구성하여 보다 쉽게 사용할 수 있도록 구성하였습니다.

## 컴포넌트 구조와 설계 의도

1. Atomic 컴포넌트 패턴을 통한 추상화

   - atomic 디자인 패턴을 활용하여 `atomic/molecule/organisms` 단계로 구성했습니다.

   - 컴포넌트 별 재사용성을 고려해서 역할을 분리하였고, top-down 방식의 데이터 흐름이 이루어지는 구조인 react를 활용하기 위해 단위 별로 구성했습니다.

   - 기존 아토믹 디자인의 경우, 로직이 따로 들어가지 않는 `template` 단계가 존재하는데 프로젝트 규모와 필요성을 고려했을 때 복잡성이 높아질 것 같아 제외했습니다.

   - `Atomic`은 최하단 컴포넌트 구조로 `제어 컴포넌트`로 활용할 수 있도록 구성했습니다.

   - `Molecule`는 atomic 컴포넌트를 합성시킨 단계이기도 하면서 `비제어 컴포넌트`로 활용할 수 있도록 구성했습니다. (ex. Timer)

   - `Organisms`은 molecule + atomic 컴포넌트를 합성시킨 단계이며, 가장 최상위 컴포넌트 단계로 위치하고 있습니다.

   - 이러한 단계를 통해 컴포넌트를 구성하였고 데이터 흐름에 대한 이슈를 최소화 할 뿐만 아니라 Unit test에 있어서 작은 단위로 관리할 수 있다는 특징을 통해 로직 역할을 분명히 분리할 수 있었습니다.

2. 합성 컴포넌트를 통한 컴포넌트 설계

   - Atomic 컴포넌트를 어디까지 활용할 수 있을지에 대한 고민을 했습니다. UI로 활용한다면 `제어 컴포넌트`로서 활용 + 여러 요구사항을 대응하기 위한 추상화를 고민했습니다.

   - 이를 위해서 합성 컴포넌트를 구성한 Atomic 컴포넌트를 구성했습니다.

   - 밑 `Form`와 같이 여러 컴포넌트들의 배치를 통해 여러 요구사항을 해결할 수 있고 추상화에 있어서도 훨씬 유연하게 구현할 수 있다는 장점을 활용할 수 있었습니다.

   ```javascript
   <Form>
     <Form.Input />
     <Form.Error>{errors.email}</Form.Error>
     <Form.Input />
     <Form.Error>{errors.password}</Form.Error>
     <ButtonGroup>
       <Button />
       <Button>비밀번호 재설정</Button>
     </ButtonGroup>
   </Form>
   ```

## 상태 관리 사용한 이유

- 클라이언트 단 상태 관리를 위한 `recoil`과 서버 데이터 관리를 위한 `react-query`로 나누어서 데이터를 관리했습니다.

- `react-query`가 나오기 전 전역 상태 관리의 역할은 서버와의 비동기 통신을 쓰기 위해 사용했고, 이를 전역으로 관리 함에 있어서 역할에 대한 분리가 아쉬웠습니다.

- 그래서 `react-query`를 통한 클라이언트와 서버 단 데이터를 확실히 분리하는 방법을 선택했습니다.

- `recoil`을 활용한 이유는 프로젝트 규모와 React스러운 state 방식의 코드 구성을 고려했을 때도 편했고 많은 보일러 플레이트를 필요로하지 않아 적합하다고 생각했습니다.

- `react-query`를 활용한 이유는 제공하는 hook에서 다양한 flag state를 제공하여 사용자를 위한 분기 처리 (isLoading, isFetching)를 할 수 있는 장점이 좋았습니다.

- 또한, 자체적인 캐싱 기능을 통해 효율적인 통신 방법도 최적화에 도움이 될 것이라 생각하여 채택했습니다.

## BDD 방식을 통한 테스트 코드 작성하기

- 테스트 시나리오는 행위 주도 개발인 `BDD(Behaviour-Driven Development)`를 기반하여 `Unit test`를 진행했습니다.

- 사용자가 직접 시나리오를 진행했을 때의 결과를 예측하여 원하는 결과인 지 쉽게 파악하기 위해 BDD 방식을 도입했습니다.

- `describe(설명할 테스트 대상 명시)` - `context(테스트 대상에 놓인 상황 설명)` - `it(테스트 대상의 행동)` 과정으로 테스트 코드를 보기 좋게 작성하는 방법을 고려했습니다.

- `Jest`는 공식적으로 `Desribe`와 `It`은 제공하지만 `context`를 따로 제공하지 않아서 `jest-plugin-context` plugin을 따로 활용했습니다.

## 고려한 점

1. JWT를 통한 인증 방법에 대한 고찰

   - 이번 과제의 경우 `access token`의 유효 기간을 고려한 내용은 없었지만 지금과 같이 `localStorage`(recoil-persist)를 활용해 토큰을 관리한다면 보안에 문제가 생기게 됩니다.
   - 이를 해결하기 위해서는 `refresh token`을 통한 토큰 관리 방법을 고려해야 합니다.
   - `access token`는 클라이언트 메모리에 저장하고, (redux, recoil, context 등..) `refresh token`의 경우 cookie를 통해 관리할 수 있는 방법이 있습니다.
   - 이러한 방식으로 `access token`을 라우팅마다 `refresh token`을 통해 가져오는 방법으로 구성할 수 있습니다.
   - cookie의 경우 `httpOnly` 옵션을 통해 `xss` 공격을 예방 할 수 있지만 모든 공격을 막을 수는 없습니다. 그렇지만 기존 방법의 토큰 보관 문제점을 보완할 수 있습니다.

2. `react-persist`를 왜 사용해야 하는 지?

   - 기본적으로 `LocalStorage`를 기반해 recoil state를 저장하는 라이브러리입니다.
   - 새로고침을 하게 되면서 클라이언트 메모리로 유지되는 access token을 유지하기 위해 도입했습니다.
   - `LocalStorage`를 활용해도 같지만 여러 렌더링 이슈를 고려하여 persist 플러그인을 활용해서 `LocalStorage`를 관리했습니다.

3. 다양한 Form 관리를 위한 `useForm` 구현하기

   - `react-hook-form`, `Formik` 등 제공하는 라이브러리가 존재하지만 간단한 폼 구조라고 생각하여 직접 구현했습니다.
   - 위 같은 라이브러리에서 사용하는 방법은 `useRef`를 통한 렌더링 최적화를 적용하고 있습니다.
   - 그렇지만 커다란 성능 이슈가 아니라고 생각해 `object` 형식의 데이터를 `onChange`를 통해 렌더링되도록 구현했습니다.
   - 합성 컴포넌트인 `Form`과 함께 활용하여 error 메시징 처리까지 구현했고 클라이언트 단에서 할 수 있는 `validate` 처리를 통해 불필요한 통신을 최소화 할 수 있었습니다.
