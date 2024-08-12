import styled from "styled-components";

export const ContainerHerosStyle = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 46px 0px;
    gap: 24px;
    max-width: 78%;

    li {
        display: flex;
        max-width: 200px;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        margin-bottom: 32px;
        
        > img {
            height: 180px;
            width: 100%;
            border-bottom: 4px solid var(--color-red);
        }

        > div {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            width: 100%;
            align-items: center;
            margin-top: 18px;

            > h2 {
                color: var(--color-gray1);
                font-weight: 600;
                text-align: left;
            }

            > button {
                background-color: transparent;
                border: none;
            }
        }
    }
`;