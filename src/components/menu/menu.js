import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 900px) {
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: fixed;
    border-bottom-right-radius: 0%;
    animation: slidein 1s;
    position: fixed;
    z-index: 500;
    @keyframes slidein {
      0% {
        width: 0vw;
        height: 0vh;
        border-bottom-right-radius: 100%;
      }
      80% {
        border-bottom-right-radius: 100%;
      }
      90% {
        width: 100vw;
      }
      100% {
        height: 100vh;
      }
    }
  }
`;

const Item = styled.div`
  display: none;
  @media only screen and (max-width: 900px) {
    display: block;
    width: 80vw;
    height: 100px;
    top: 20vh;
    position: relative;
    color: white;
    text-align: center;
    left: 10vw;
    font-size: 30px;
    opacity: 1s;
    animation: display 2s;
    font-weight: 600;
    @keyframes display {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const WrapperButton = styled.div`
  @media only screen and (max-width: 900px) {
    width: 50px;
    background-color: red;
    height: ${(props) => (props.action === "yes" ? "0" : "7px")};
    position: relative;
    z-index: 1000;
    border-radius: 2px;

    transition: all 0.5s;
    &::after {
      border-radius: 2px;
      content: " ";
      width: 50px;
      background-color: red;
      height: 7px;
      z-index: 1000;
      position: fixed;
      top: 40px;
      transform: ${(props) =>
        props.action === "yes" ? "rotate(45deg)" : "rotate(0deg)"};
      transition: all 1s;
    }
    &::before {
      border-radius: 2px;
      content: " ";
      width: 50px;
      background-color: red;
      height: 7px;
      z-index: 1000;
      position: fixed;
      top: 60px;
      transform: ${(props) =>
        props.action === "yes"
          ? "rotate(-45deg) translate(15px,-15px)"
          : "rotate(0deg) translate(0px,0px)"};
      transition: all 1s;
    }
  }
`;

const ButtonContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 40px;
    height: 30px;
    position: fixed;
    z-index: 1000;
    right: 40px;
    top: 50px;
    cursor: pointer;
  }
`;

const NoteBookDisplay = styled.div`
  width: 55vw;
  font-size: 22px;
  height: 50px;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  left: 40vw;
  text-align: center;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  color: white;
  z-index: 500;
  top: 50px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const ItemNoteBook = styled.div`
  border-bottom: none;
  transition: border-bottom 1s;
  &::after {
    content: " ";
    width: 0%;
    height: 2px;
    transition: all 1s;
    margin-top: 5px;
    background-color: red;
  }
  &:hover {
    &::after {
      content: " ";
      display: block;
      width: 100%;
    }
  }
`;

function Menu(params) {
  const [disp, setDisp] = useState("no");
  return (
    <>
      <ButtonContainer
        onClick={(e) => (disp === "yes" ? setDisp("no") : setDisp("yes"))}
      >
        <WrapperButton action={disp}></WrapperButton>
      </ButtonContainer>
      {disp === "yes" ? (
        <Wrapper>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Skills</Item>
          <Item>Projects</Item>
          <Item>Contact</Item>
        </Wrapper>
      ) : null}
      <NoteBookDisplay>
        <ItemNoteBook>Home</ItemNoteBook>
        <ItemNoteBook>About</ItemNoteBook>
        <ItemNoteBook>Skills</ItemNoteBook>
        <ItemNoteBook>Projects</ItemNoteBook>
        <ItemNoteBook>Contact</ItemNoteBook>
      </NoteBookDisplay>
    </>
  );
}

export default Menu;
