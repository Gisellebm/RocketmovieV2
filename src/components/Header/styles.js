import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

    > main {
        width: 100%;
        max-width: calc(100% - 24.6rem);
        margin: 0 auto;
        
        display: flex;
        justify-content: space-between;
        gap: 6.4rem;

        align-items: center;
        position: relative;     
        
        .title {
            font-size: 2.4rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        button.sair {
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            border: none;
            font-size: 1.4rem;

            position: absolute;
            top: 4.2rem;
            right: 7.4rem;
        }

        button.sair:hover {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        
        strong {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
            width: max-content;
        }
    }

    >img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    }
`