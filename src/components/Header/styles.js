import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    width: 100%;
    padding: 0 12.3rem;
    
    display: flex;
    justify-content: space-between;
    gap: 6.4rem;
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Profile = styled.div`
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

        button {
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            border: none;
            font-size: 1.4rem;
        }

        button:hover {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    >img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    }
`