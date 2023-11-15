import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 3.2rem;
    border-radius: 1.6rem;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BROWN};

    > h1 {
        font-size: 2.4rem;
        flex: 1;
        text-align: left;
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        text-align: justify;
        margin: 1.5rem 0;

        overflow: hidden;
        text-overflow: ellipsis;


        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    > footer {
        width: 100%;
        display: flex;
    }
`