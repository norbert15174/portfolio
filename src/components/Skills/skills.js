import react from "react";
import styled from "styled-components";
import Item from "./item";
import SectionTitle from "./../sketch/sectionTitle"

const SkillsContainer = styled.div`
  width: 100vw;
  background-color: black;
  padding-bottom: 100px;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 100%;
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
  const nameItem = [
    {
      iName: "Java",
      procent: "60%",
    },
    {
      iName: "Spring Boot",
      procent: "40%",
    },
    {
      iName: "Hibernate",
      procent: "40%",
    },
    {
      iName: "Javascript",
      procent: "40%",
    },
    {
      iName: "React",
      procent: "40%",
    },
    {
      iName: "Html",
      procent: "60%",
    },
    {
      iName: "CSS / SCSS / STYLED-COMPONENT",
      procent: "60%",
    },
    {
      iName: "Mysql / MongoDB",
      procent: "40%",
    },
  ];

  return (
    <SkillsContainer>
      <SectionTitle title="skills"/>
      <Items>
        {nameItem.map(e => <Item iName={e.iName} key={e.iName} procent={e.procent}></Item>)}
      </Items>
    </SkillsContainer>
  );
}

export default Skills;
