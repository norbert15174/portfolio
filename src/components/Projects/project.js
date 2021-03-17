import react from "react";
import styled from "styled-components";
import Item from "./item";
import SectionTitle from "./../sketch/sectionTitle";
import { connect } from "react-redux";

const ProjectContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 100%;
  background-color: black;
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Project = ({ projects }) => (
  <ProjectContainer>
    <SectionTitle title="projects" />
    {projects.map(({ direction, img, projectName, content }) => (
      <Item img={img} direction={direction} projectName={projectName} content={content}/>
    ))}
  </ProjectContainer>
);

const mapStateToProps = ({ projects }) => {
  return {
    projects,
  };
};

export default connect(mapStateToProps)(Project);
