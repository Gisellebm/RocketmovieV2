import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    > span {
        color: ${({ theme }) => theme.COLORS.PINK};      
    }
`