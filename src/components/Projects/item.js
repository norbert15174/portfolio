import react from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  color: white;
  position: relative;
  padding-bottom: 30px;
  padding-top: 30px;
  margin-bottom: 120px;
`;

const Text = styled.div`
  width: 80%;
  font-size: 30px;
  left: 10%;
  position: relative;
`;

const Image = styled.img`

    width: 90%;
    left: 5%;
    position: relative;
    top: 100px;

`;

const Item = ({direction,img,projectName}) => (
  <ItemContainer>
    {direction === "right" ? <Text>
        <h1> {projectName} </h1>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Text> :  <Image src={img}/> }
    {direction === "left" ? <Text>
    <h1> {projectName}</h1>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Text> :  <Image src={img}/> }
    
  </ItemContainer>
);

export default Item;
