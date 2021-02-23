import react from "react";
import styled from "styled-components";


const Tittle = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 55px;
  font-weight: 500;
  position: relative;

  &:before {
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    content: '${({sectionTitle}) => sectionTitle}';
    color: white;
    display: block;
    position: relative;
    opacity: 0.3;
    top: 90px;
    font-size: 100px;
    font-weight: 700;
  }
`;

const SectionTitle = ({title}) => (
    <Tittle sectionTitle={title}>{title}</Tittle>
);

export default SectionTitle;