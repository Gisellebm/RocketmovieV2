import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5.6rem;
    background: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};
    border-radius: 1rem;
    font-weight: 500;
    font-size: 1.6rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        opacity: 0.5
    }

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.ROSE};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

`