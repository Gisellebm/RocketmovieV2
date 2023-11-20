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
        padding: 4rem 0 8.4rem;
        width: 100%;
        max-width: calc(100% - 24.6rem);
        margin: 0 auto;

        > h1 {
            font-size: 3.6rem;
            margin: 2.4rem 0 4rem;
        }
    }   
`

export const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    >.twoColumns {
        columns: 2;
        gap: 4rem;

        .excluir {
            background-color: ${({ theme} ) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme} ) => theme.COLORS.PINK};
        }
    }
`