import styled from "styled-components";

export const HeroPageStyles = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: var(--color-light_blue);

    > header { 
        display: flex;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 90%;
        margin-top: 24px;
        
        > img {
            width: 20%;
        }

        > form {
            display: flex;
            margin-left: 72px;
            background-color: #FFFFFF;
            border: none;
            border-radius: 32px;
            width: 56%;
            height: 42px;
            padding-left: 12px;

            > button {
                background-color: transparent;
                border: none;

                > img {
                    width: 18px;
                }
            }

            > input {
                padding-left: 12px;
                border: none;
                border-radius: 32px;
                font-weight: 400;
                color: var(--color-gray2);
                background-color: #FFFFFF;

                width: 100%;
            }
            > input:focus {
                border: none;
                border-radius: 32px;
            }
        }
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        width: 100%;
        max-width: 76%;
        box-sizing: border-box;
        gap: 100px;
        margin-top: 64px;

        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;

            > p {
                color: var(--color-gray2);
                font-weight: 400;
                font-size: 1rem;
            }

            > div {
                display: flex;
                justify-content: space-between;
                width: 100%;
                gap: 32px;
                align-items: flex-start;

                > h1 {
                    color: var(--color-gray1);
                    font-weight: 600;
                    font-size: 2rem;
                }

                

                > img {
                    width: 24px;
                }

                > h3 {
                    color: var(--color-gray1);
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                > div {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    justify-content: space-around;
                    gap: 12px;
                    
                    > h3 {
                        color: var(--color-gray1);
                        font-size: 0.8rem;
                        font-weight: 600;
                    }
                    
                    > span {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        > h3 {
                        color: var(--color-gray1);
                        font-size: 0.8rem;
                        font-weight: 600;
                    }
                    }
                }
            }

        }

        > img {
            max-width: 68%;
        }
    }

    .containerComics {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;
        max-width: 76%;
        box-sizing: border-box;
        gap: 64px;
        margin-top: 92px;
        align-items: flex-start;

        > h1 {
            color: var(--color-gray1);
            font-weight: 600;
            font-size: 1.6rem;
        }

        > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 24px;
            box-sizing: border-box;
            margin-bottom: 80px;
            
            > li {
                display: flex;
                flex-direction: column;
                max-width: 120px;
                justify-content: space-between;

                > span {
                    > img {
                        width: 100%;
                        height: 184px;
                    }
                }
                
                > h2 {
                    color: var(--color-gray1);
                    font-weight: 600;
                    font-size: 0.8rem;
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }

`;