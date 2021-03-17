import react from "react";
import styled from "styled-components";
import SectionTitle from "../sketch/sectionTitle";
import style from "./style.module.scss";

const ContactContainer = styled.div`
  width: 100vw;
  background-color: black;
  padding-top: 50px;
  padding-bottom: 200px;
  color: red;
`;

const ContactForm = styled.form`
  width: 80%;
  left: 10%;
  display: block;
  position: relative;
  margin-top: 200px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 500px;
  background-color: #1f2124;
  position: relative;
  z-index: 2;
  outline: none;
  color: white;
  padding: 10px 10px 10px 10px;
`;
const InputContainer = styled.div`
  width: 100%;
`;
const InputText = styled.input`
  margin-top: 50px;
  width: 80%;
  padding: 10px 10px 10px 10px;
  background-color: #1f2124;
  position: relative;
`;

const SendMail = styled.div`
  top: 100px;
  width: 300px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 700;
  background-color: #751401;
  position: relative;
  border-radius: 10px;
  left: calc(40% - 150px);
  color: white;
  font-size: 20px;
  text-align: center;
  font-style: italic;
  cursor: pointer;
`;

const InputLabel = styled.label`
  position: relative;
  left: 60px;
  z-index: 5;
`;

const Contact = () => (
  <ContactContainer>
    <SectionTitle title="contact" />
    <ContactForm>
      <InputContainer>
        {/* <InputLabel for="mail" className="LabelTextClass">E-mail</InputLabel> */}
        <div id="header">
          <h1 className={style.asd}>My Headerdsadddddddddddddddd</h1>
        </div>

        <div className={style.under}>dsadsadsa</div>
        {/* <InputText id="mail" type="text" className="InputTextClass"></InputText> */}
        {/* <br/>
        <InputLabel className="LabelTextClass">Temat</InputLabel>
        <InputText type="text" className="InputTextClass"></InputText>
        <br/>
        <InputLabel className="LabelTextClass">Temat</InputLabel>
        <InputText type="text" className="InputTextClass"></InputText> */}
        <SendMail>Send Message</SendMail>
      </InputContainer>
      <TextArea></TextArea>
    </ContactForm>
  </ContactContainer>
);

export default Contact;
