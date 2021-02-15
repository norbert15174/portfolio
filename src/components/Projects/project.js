import react from "react";
import styled from "styled-components";
import Item from "./item";

const ProjectContainer = styled.div`

    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    background-color: black;
    position: relative;
    padding-top: 50px;
    padding-bottom: 50px;
`;

const Project = () => (
    <ProjectContainer>
        <Item direction="left" projectName="Telephoners backend" img="https://cdn.discordapp.com/attachments/785944190365204521/810984782439645244/unknown.png"/>
        <Item direction="right" projectName="Zgłoś Zabytek" img="https://i.ibb.co/K6KttTm/Untitled.png"/>
        <Item direction="left" projectName="Cinema Booking System" img="https://i.ibb.co/mR78SQk/Untitled2.png"/>
    </ProjectContainer>
  );


export default Project;
  