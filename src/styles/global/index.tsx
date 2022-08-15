import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    a, a:visited, a:hover, a:active {
        color: inherit;
        text-decoration: none;
    }

    ul, ol, li {
        list-style: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }   
`

export default GlobalStyle
