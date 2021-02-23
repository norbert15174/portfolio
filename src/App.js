import Menu from "./components/menu/menu";
import styled from "styled-components";
import Header from "./components/headerSection/header";
import About from "./components/About/abouts";
import Skills from "./components/Skills/skills";
import Project from "./components/Projects/project";
import {Provider} from 'react-redux';
import store from './components/store/index';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 600px;
  
  //background-image: url("https://images.unsplash.com/photo-1525227661914-3ed79b83624e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGRhcmtuZXNzfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80");
  background-image: url("https://wallpapercave.com/wp/wp1828913.jpg");
  
  background-repeat: no-repeat;
  background-size: 160vw 100%;
  background-position-x: -60vw;
  &:after{
    content: ' ';
    position: absolute;
    top: 0;
    display: block;
    background: rgba(0,0,0,0.6);
    width: 100vw;
    height: 100vh;
  }
`;

function App() {
  return (
    <Provider store={store}>
    <Menu></Menu>
      <MainContainer>
        <Header></Header>
      </MainContainer>
      <About></About>
      <Skills></Skills>
      <Project></Project>
    </Provider>
  );
}

export default App;
