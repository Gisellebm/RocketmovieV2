import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1.6rem;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_400};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 1rem;
    
    padding: 1.6rem;

    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {   
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;   

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`