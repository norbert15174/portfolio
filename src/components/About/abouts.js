import react from "react";
import styled from "styled-components";

const AboutMe = styled.div`
  width: 100vw;
  padding-bottom: 200px;
  background-color: black;
  display: grid;
  grid-template-columns: 50% 50%;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 100%;
    padding-bottom: 50px;
  }
`;

const AboutText = styled.div`
  width: 70%;
  padding-bottom: 20px;
  position: relative;
  left: 10%;
  color: white;
  font-size: 26px;
  font-family: Arial, Helvetica, sans-serif;
  @media only screen and (max-width: 1200px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 20px;
    width: 80%;
  }
`;

const TextHeader = styled.h1`

`;

const AboutPhoto = styled.img`

clip-path: polygon(23% 0, 100% 0%, 100% 100%, 0% 100%);
    width: 110%;
    left: -10%;
    position: relative;
    height: 80%;
    max-height: 500px;
    top: 100px;
    @media only screen and (max-width: 900px) {
    width: 100%;
    clip-path: none;
    height: 100%;
    display: none;
  }

`;

function About() {
  return (
    <AboutMe> 
        <AboutText>
        <TextHeader>about me</TextHeader>
          I am a student with a passion for programming. At the beginning, I was
          learning C ++ / python / javascript, but two years ago I changed my
          area of interests into java and decided to go in this direction. I am
          in Spring Boot course where I have learned cloud basics, jwt auth,
          oAuth2 and so on. Playing chess and solving puzzles is what I do in my
          spare time. I am diligent, hardworking and I value self-development
          very much so learning new things is a very important part of my life.
          I am looking for an internship where I could expand my skills and
          become a better programmer.
        </AboutText>
        <AboutPhoto src="https://media.istockphoto.com/photos/stubble-guy-picture-id1051185180?k=6&m=1051185180&s=612x612&w=0&h=LJ6VAgbPmX4T4PRHEjCyeOF3xOZd3cSImWDM4cr1Rew="></AboutPhoto>

      
    </AboutMe>
  );
}

export default About;
