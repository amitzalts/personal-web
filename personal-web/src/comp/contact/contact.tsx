import React, { useState } from "react";
import * as S from "./contact.style";
import axios from "axios"; // Import Axios

const ContactMe = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      console.log(event.target.elements);
      const name = event.target.elements.name.value;
      const email = event.target.elements.email.value;
      const message = event.target.elements.message.value;
      const newContact: any = { name, email, message };
      await axios.post("/api/contacts/addContact", newContact);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <S.FormContainer>
      <h2>Contact Me</h2>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <label htmlFor="name">Name:</label>
          <S.Input type="text" id="name" name="name" required />
        </S.FormGroup>
        <S.FormGroup>
          <label htmlFor="email">Email:</label>
          <S.Input type="email" id="email" name="email" required />
        </S.FormGroup>
        <S.FormGroup>
          <label htmlFor="message">Message:</label>
          <S.Input
            id="message" 
            name="message"
            required
          />
        </S.FormGroup>
        <S.SubmitButton type="submit">Submit</S.SubmitButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default ContactMe;
