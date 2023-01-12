import styled from 'styled-components'

export const Container = styled.div`
  > .time {
    display: flex;
    justify-content: space-between;
    margin-top: .8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_600};
    opacity: .7;
    font-size: 1.4rem;
  }

  > .track {
    position: relative;
  }

  > .track::before {
    content: "";

    width: 100%;
    height: .6rem;
    display: block;

    background: ${({ theme }) => theme.COLORS.GRAY_800};
    opacity: .3;
    border-radius: 8rem;

    position: absolute;
  }

  .track::after {
    content: "";

    width: 80%;
    height: .6rem;
    display: block;

    background: ${({ theme }) => theme.COLORS.GRAY_800};
    border-radius: .8rem;
  }
`
