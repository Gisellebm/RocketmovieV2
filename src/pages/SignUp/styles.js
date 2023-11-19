import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 13.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-bottom: 0.6rem;
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_50};
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        margin: 4.8rem 0;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-bottom:2.4rem;
    }

    > a {
        margin-top: 4.2rem;
        color: ${({ theme }) => theme.COLORS.PINK};

        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: center;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`