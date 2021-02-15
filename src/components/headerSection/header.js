import react from 'react';
import styled from "styled-components";
import Typed from 'react-typed';

const Container = styled.div`
    @media only screen and (max-width: 900px) {
        width: 100vw;
        height: 80vh;
        position: relative;
        top: 10vh;
        text-align: center;
    }

`;


const Text = styled.div`
    color: white;
    font-size: 60px;
    left: calc(100vw - 500px);
    width: 400px;
    top: 250px;
    position: relative;
    border-bottom: 3px solid red;
    font-weight: 600;
    text-align: left;
    &:nth-child(1){
        font-size: 35px;
        padding-top: 5px;
        border: none;
        font-weight: 200;
    }
    &:nth-child(3){
        font-size: 35px;
        padding-top: 5px;
        border: none;
        font-weight: 200;
    }
    @media only screen and (max-width: 900px) {
    color: white;
    font-size: 40px;
    left: calc(100vw - 350px);
    width: 300px;
    padding-bottom: 5px;
    top: 200px;
    border-bottom: 2px solid red;
    &:nth-child(1){
        font-size: 25px;
        padding-top: 5px;
        text-align: left;
        border: none;
        font-weight: 200;
    }
    &:nth-child(3){
        font-size: 25px;
        padding-top: 5px;
        text-align: left;
        border: none;
        font-weight: 200;
    }
    }
    @media only screen and (max-width: 600px){
        left: calc(100vw - 200px);
        width: 160px;
        font-size: 22px;
        &:nth-child(3){
            font-size: 15px;
        }
    }

`;

function Header() {
    return (
      <Container>
          <Text>Hello, I am</Text>
          <Text>Faron Norbert</Text>
          <Text><Typed
                    strings={['Java Intern','Junior Java Developer','Student']}
                    typeSpeed={70}
                    backDelay={1000}
                    backSpeed={30}
                    loop
                /></Text>
      </Container>
    );
  }

export default Header