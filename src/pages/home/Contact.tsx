import React from 'react';
import { ContactWrapper, ContactContainer, ContactContent, ContactBox, ContactBtn } from './style';

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContainer>
        <ContactContent>
          <h1>Be the first to know!</h1>
          <p>Get the latest on hashrate and Bitcoin mining, in your inbox every other week. No spam. Unsubscribe anytime.</p>
        </ContactContent>
        <ContactBox>
          <input type='text' placeholder='Email Address' />
          <ContactBtn>Sign up</ContactBtn>
        </ContactBox>
      </ContactContainer>
    </ContactWrapper>
  )
}

export default Contact
