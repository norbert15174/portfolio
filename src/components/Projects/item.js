import react from "react";
import styled from "styled-components";
import { ImGithub } from "react-icons/im";

const ItemContainer = styled.div`
  width: 100%;
  color: white;
  position: relative;
  padding-bottom: 30px;
  padding-top: 30px;
  margin-bottom: 120px;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 100%;
    margin-bottom: 150px;
  }
`;

const Text = styled.div`
  width: 80%;
  font-size: 24px;
  left: 10%;
  position: relative;
  @media only screen and (max-width: 1200px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  width: 90%;
  left: 5%;
  position: relative;
  top: 100px;
  min-height: 400px;
  @media only screen and (max-width: 1200px) {
    min-height: 350px;
  }
  @media only screen and (max-width: 900px) {
    min-height: 200px;
    top: 0px;
    margin-top: 50px;
  }
`;

const GitHub = styled(ImGithub)`
  color: white;
  font-size: 80px;
  position: absolute;
  bottom: -100px;
  left: 0;
  cursor: pointer;
  @media only screen and (max-width: 1200px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 60px;
  }
`;

const ReadMore = styled.div`
  width: 250px;
  height: 70px;
  position: absolute;
  bottom: -100px;
  left: 200px;
  text-align: center;
  vertical-align: middle;
  line-height: 60px;
  z-index: 200;
  background-color: #440a16;
  border-radius: 10px;
  &:before {
    content: " ";
    display: block;
    width: 250px;
    height: 70px;
    position: absolute;
    text-align: center;
    line-height: 60px;
    z-index: -200;
    clip-path: polygon(56% 0, 100% 0, 100% 100%, 35% 100%);
    background-color: #5c2323;
    border-radius: 10px;
  }
  @media only screen and (max-width: 1200px) {
    width: 200px;
    height: 60px;
    bottom: -100px;
    left: 100px;
    &:before {
      width: 200px;
      height: 60px;
    }
  }
  @media only screen and (max-width: 900px) {
    width: 150px;
    height: 50px;
    bottom: -95px;
    left: 100px;
    &:before {
      width: 150px;
      height: 50px;
    }
  }
`;

const MoreInfo = styled.p`
  top: -30px;
  position: relative;
  z-index: 10000;
  font-size: 30px;
  color: white;
  font-weight: 700;
  font-style: italic;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    font-size: 25px;
  }
`;

const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 900px) {
    display: block;
  }
`;
const Destkop = styled.div`
  display: block;
  display: grid;
  grid-template-columns: 50% 50%;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const Item = ({ direction, img, projectName, content }) => (
  <ItemContainer>
    <Destkop>
      {direction === "right" ? (
        <Text>
          <h1> {projectName} </h1>
          {content}
          <GitHub></GitHub>
          <ReadMore>
            <MoreInfo>More</MoreInfo>
          </ReadMore>
        </Text>
      ) : (
        <Image src={img} />
      )}
      {direction === "left" ? (
        <Text>
          <h1> {projectName}</h1>
          {content}
          <GitHub></GitHub>
          <ReadMore>
            <MoreInfo>More</MoreInfo>
          </ReadMore>
        </Text>
      ) : (
        <Image src={img} />
      )}
    </Destkop>
    <Mobile>
      <Image src={img} />
      <Text>
        <h1> {projectName} </h1>
        {content}
        <GitHub></GitHub>
        <ReadMore>
          <MoreInfo>More</MoreInfo>
        </ReadMore>
      </Text>
    </Mobile>
  </ItemContainer>
);

export default Item;
