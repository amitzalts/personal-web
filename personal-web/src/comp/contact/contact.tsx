// ContactMe.js
import React, { useState } from 'react';
import * as S from './contact.style';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Simulate form submission, you can add your custom logic here
    console.log('Form submitted:', formData);
    // Clear form data after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <S.FormContainer>
      <h2>Contact Me</h2>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <label htmlFor="name">Name:</label>
          <S.Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </S.FormGroup>
        <S.FormGroup>
          <label htmlFor="email">Email:</label>
          <S.Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </S.FormGroup>
        <S.FormGroup>
          <label htmlFor="message">Message:</label>
          <S.TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </S.FormGroup>
        <S.SubmitButton type="submit">Submit</S.SubmitButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default ContactMe;
