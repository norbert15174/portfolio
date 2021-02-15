import Menu from "./components/menu/menu";
import styled from "styled-components";
import Header from "./components/headerSection/header";
import About from "./components/About/abouts";
import Skills from "./components/Skills/skills";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 600px;
  background-image: url("https://images.unsplash.com/photo-1525227661914-3ed79b83624e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGRhcmtuZXNzfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: 160vw 100%;
  background-position-x: -60vw;
`;

function App() {
  return (
    <>
    <Menu></Menu>
      <MainContainer>
        <Header></Header>
      </MainContainer>
      <About></About>
      <Skills></Skills>
    </>
  );
}

export default App;
