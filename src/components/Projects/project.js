import react from "react";
import styled from "styled-components";
import Item from "./item";

const ProjectContainer = styled.div`

    width: 100vw;
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
        <Item direction="right" projectName="Jokes, Weather, Currency API" img="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/122764770_2680278632225603_8432238246825932284_o.jpg?_nc_cat=108&ccb=3&_nc_sid=b9115d&_nc_ohc=j3uJiMlfHJAAX9YgYbq&_nc_ht=scontent-frt3-1.xx&oh=083b6b8ae4afd91fdd58f6414b268b9c&oe=6051DAAD"/>
        <Item direction="left" projectName="Notepad API" img="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/126473774_2701020393484760_4724393082916273445_o.jpg?_nc_cat=107&ccb=3&_nc_sid=b9115d&_nc_ohc=8WVq23hmlnoAX8rMxt3&_nc_ht=scontent-frt3-1.xx&oh=9a58cd5ca1d6455e0e7a15ec42e2a2f8&oe=605026EB"/>
        <Item direction="right" projectName="RemFaron website" img="https://i.ibb.co/zR65GqQ/Untitled3.png"/>
        
    </ProjectContainer>
  );


export default Project;
  