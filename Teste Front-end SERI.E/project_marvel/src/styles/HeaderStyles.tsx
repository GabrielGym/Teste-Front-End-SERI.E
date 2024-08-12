import styled from "styled-components";


export const HeaderStyles = styled.header`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;

    span {
        margin-top: 20px;
        box-sizing: border-box;
        display: flex;
        

        > img {
            max-width: 80%;
            margin: 0 auto;
        }
    }

    h1 {
        color: var(--color-gray1); 
        font-weight: 800;
        font-size: 1.8rem;
        margin-top: 40px;
    }

    h3 {
        margin-top: 10px;
        color: var(--color-gray2);
        font-size: 0.8rem;
        text-align: center;
    }
`