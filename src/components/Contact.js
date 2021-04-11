import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <ContactContainer id="contact">
      <h1>Contact()</h1>
      <p>Feel free to send an e-mail</p>
      <p> I'll try my best to get back to you!</p>

      <p> won9.developer@gmail.com</p>
      <p>514)464-4399</p>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.div`
  height: 50vh;
`;
