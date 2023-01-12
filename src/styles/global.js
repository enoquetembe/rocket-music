import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BG_BLACK_900};

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color:  ${({ theme }) => theme.COLORS.GRAY_900};

    @media(max-width: 720px) {
      display: block;
    }
  }
`
