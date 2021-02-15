import react from "react";
import styled from "styled-components";
import Item from "./item";

const SkillsContainer = styled.div`

    width: 100vw;
    background-color: black;
    padding-bottom: 100px;
    @media only screen and (max-width: 900px) {
        grid-template-columns: 100%;
  }

`;

const MySkills = styled.div`

    width: 100%;
    text-align: center;
    color: white;
    font-size: 55px;
    font-weight: 500;
    position: relative;

    
    &:before{
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        content: 'Skills';
        color: white;
        display: block;
        position: relative;
        opacity: 0.3;
        top: 90px;
        font-size: 100px;
        font-weight: 700;
    }

`;
const Items = styled.div`

    display: grid;
    position: relative;
    grid-template-columns: 50% 50%;
    top: 50px;

    @media only screen and (max-width: 900px) {
        grid-template-columns: 100%;
  }

`;

function Skills() {
    return (
      <SkillsContainer>
          <MySkills>Skills</MySkills>
        <Items>
            <Item iName="Java" procent="60%"></Item>
            <Item iName="Spring Boot" procent="40%"></Item>
            <Item iName="Hibernate" procent="40%"></Item>
            <Item iName="Javascript" procent="40%"></Item>
            <Item iName="React" procent="40%"></Item>
            <Item iName="Html" procent="60%"></Item>
            <Item iName="CSS/SCSS/STYLED-COMPONENT" procent="60%"></Item>
            <Item iName="Mysql / MongoDB" procent="40%"></Item>
        </Items>




      </SkillsContainer>
    );
  }
  
  export default Skills;