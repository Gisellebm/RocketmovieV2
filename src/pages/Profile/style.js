import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;
        background-color: ${({ theme }) => theme.COLORS.BROWN};

        display: flex;
        align-items: center;

        padding: 0 14.4rem;
    }
`

export const Form = styled.form`
    margin: 3rem auto 0;
    max-width: 34rem;

    > .dados {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-bottom:2.4rem;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -12.4rem auto 6.4rem;

    width: 18.6rem;
    height: 18.6rem;

    > img {
        border-radius: 50%;
        width: 18.6rem;
        height: 18.6rem;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0.7rem;
        right: 0.7rem;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }

    }

`;