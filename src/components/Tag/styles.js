import styled from "styled-components";

export const Container = styled.span`
    height: 3rem;
    padding: 0.8rem 1.6rem;
    margin-right: 0.8rem;
    border-radius: 0.8rem;
    background-color: ${({ theme, isDetails }) => isDetails ? theme.COLORS.BROWN : theme.COLORS.TEXT_BUTTON};
    color: ${({ theme }) =>theme.COLORS.TEXT_TAG};
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-family: 'Roboto', serif;
    font-weight: 400;
`