import react from "react";
import styled, { keyframes } from "styled-components";

const fill = (width) =>
  keyframes`
    from {
      width: 0;
    }
    to {
      width: ${width};
    }
  `;

const ItemContainer = styled.div`
  
  position: relative;
  left: 10%;
  width: 80%;
  height: 100px;
  color: white;
  padding: 10px 10px 10px 10px;
  font-size: 25px;
  font-weight: 700;

  &:after {
    content: " ";
    display: block;
    width: 100%;
    background-color: #402522;
    height: 15px;
    border-radius: 10px;
    position: absolute;
    top: 70px;
  }
  &:before {
    content: " ";
    display: block;
    width: ${({procent}) => procent};
    background-color: #f53722;
    height: 15px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    position: absolute;
    top: 70px;
    z-index: 10;
    animation: ${({ procent }) => fill(procent)} 2s;
  }
  @media only screen and (max-width: 900px) {
    font-size: 20px;
    &:after {
      width: 90%;
      top: 50px;
    }
    &:before {
      top: 50px;
    }
  }
  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;

const ProcentText = styled.span`
  position: absolute;
  left: ${({procent}) => procent};
  font-size: 12px;
  top: 68px;
  z-index: 20;
  @media only screen and (max-width: 1200px) {
    top: 50px;
  }
`;

const Item = ({ iName, procent }) => (
  <ItemContainer procent={procent}>
    {iName} <ProcentText procent={procent}>{procent}</ProcentText>
  </ItemContainer>
);

export default Item;
