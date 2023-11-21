import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
        "header"
        "content"
    ;

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 4rem 0 8.5rem;
        width: 100%;
        max-width: calc(100% - 24.6rem);
        margin: 0 auto;
    }   
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;


    > p {
        padding-right: 1rem;
        text-align: justify;
        font-size: 1.6rem;
        font-weight: 400;
    }

    > #button {
        width: 40rem;
        margin-top: 3rem;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 1.9rem;
    margin: 2.4rem 0;
    

    > h1 {
        font-size: 3.6rem;
        font-weight:500;
    }

    > .stars {
        font-size: 2.2rem;
    }

    > p {
        font-size: 2rem;
    }
`

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%; 
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`