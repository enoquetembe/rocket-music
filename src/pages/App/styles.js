import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 10rem;
  height: 100vh;
  @media(max-width: 720px) {
    max-width: 700px;
    padding: 3rem;
   
  }

  > main {
    display: grid;
    grid-template-areas:
      "box-1 box-2"
      "box-1 box-3";
    gap: 3.2rem;

    @media (max-width: 720px) {
      grid-template-areas:
      "box-1"
      "box-2"
      "box-3";
    }

    .box {
      background-color: ${({ theme }) => theme.COLORS.BG_VIOLET};
      padding: 2.9rem;
      border-radius: 1rem;

      display: flex;
      flex-direction: column;
      gap: 2.9rem;

      img {
        object-fit: cover;
      }

      @media(max-width: 720px) {
        width: 100%;
      }
    }

    #box-1 {
      grid-area: box-1;
      padding: 3.8rem;
    }

    #box-2 {
      grid-area: box-2;
    }

    #box-3 {
      grid-area: box-3;
    }
  }
`

