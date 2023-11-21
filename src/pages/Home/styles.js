import styled from "styled-components";
import { Link } from "react-router-dom";

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
        padding: 4rem 0 8.4rem;
        width: 100%;
        max-width: calc(100% - 24.6rem);
        margin: 0 auto;
    } 
`

export const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.7rem;

    > h1 {
        font-size: 3.2rem;
        font-weight: 400;
    }

    > div {
        width:20.7rem;
    
    }
`
export const NewMovie = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    padding: 1.35rem 3.2rem;
    border-radius: 0.8rem;
`;

export const Movies = styled.div`

    display: flex;
    flex-direction: column;
    gap: 4rem;
    overflow-y: auto;
    padding: 1rem;
`