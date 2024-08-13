import styled from "styled-components";

export const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 1;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;

  > img {
    display: block;
    width: 100%;
    height: 180px;

    &:hover + ${Tooltip} {
        opacity: 1;
        visibility: visible;
    }
  }
`;

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
            height: 220px;
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