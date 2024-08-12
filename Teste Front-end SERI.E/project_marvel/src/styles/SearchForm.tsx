import styled from "styled-components";

export const SearchFormStyles = styled.form`
    background-color: var(--color-light_pink);
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
    max-width: 64%;
    border: none;
    border-radius: 32px;
    margin-top: 32px;
    max-height: 48px;

    button {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border: none;
        background-color: transparent;
        max-width: 10%;

        > img {
            max-height: 50%;
            margin-left: 18px;
        }
    }

    input{
        background-color: transparent;
        border: 2px solid transparent;
        color: var(--color-red);
        font-size: 1rem;
        font-weight: 600;
        padding: 12px 20px;
        width: 100%;
        border-radius: 32px;
    }

    input:focus {
        border-color: var(--color-red);
        outline: none; 
    }

    span {
        font-size: 0.8;
        color: var(--color-red);
        max-width: 84%;
        width: 100%;
        text-align: end;
        padding-top: 16px;
        padding-right: 32px;
        font-weight: 600;
    }

`