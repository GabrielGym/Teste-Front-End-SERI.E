import styled from "styled-components";

export const DashboardStyles = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 86px;
    max-width: 80%;

    h2 {
        color: var(--color-gray3);
        font-weight: 400;
    }

    div {
        display: flex;
        gap: 16px;

        > div {
        display: flex;
        align-items: center;
        gap: 8px;
        
        > span{
            > img {
                height: 22px;
            }
        }

        > h3 {
            color: var(--color-red);
            font-weight: 400;
            font-size: 0.8rem;
        } 
    }

     > button{
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
            height: 36px;
        }
    }
}
`