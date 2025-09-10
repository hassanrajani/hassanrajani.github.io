import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const SuccessMessage = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #4caf50;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 9999;
  font-weight: 500;
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`

const ErrorMessage = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #f44336;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 9999;
  font-weight: 500;
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`

const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const formData = new FormData(form.current);
    const userEmail = formData.get('from_email');
    const userName = formData.get('from_name');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    try {
      // Send notification to admin (you) with proper template variables
      const adminParams = {
        to_name: 'Hassan Rajani',
        from_name: userName,
        from_email: userEmail,
        subject: subject,
        message: message,
        reply_to: userEmail
      };
      
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_j4rjkf5',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_4u65g8b',
        adminParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'N99mg3AOUZM-9V-zJ'
      );
      
      // Send confirmation to user
      const userParams = {
        to_name: userName,
        from_name: 'Hassan Rajani',
        from_email: 'mohammadhasanhasnain@gmail.com',
        subject: 'Thank you for contacting me!',
        message: `Hi ${userName},\n\nThank you for reaching out! I have received your message about "${subject}" and will get back to you soon.\n\nBest regards,\nHassan Rajani`,
        reply_to: 'mohammadhasanhasnain@gmail.com'
      };
      
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_j4rjkf5',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_4u65g8b',
        userParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'N99mg3AOUZM-9V-zJ'
      );
      
      setOpen(true);
      form.current.reset();
      setLoading(false);
      
      // Auto hide success message
      setTimeout(() => setOpen(false), 5000);
      
    } catch (error) {
      console.error('Email send failed:', error);
      setError('Failed to send email. Please try again.');
      setLoading(false);
      
      // Auto hide error message
      setTimeout(() => setError(''), 5000);
    }
  }



  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" type="email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton type="submit" value={loading ? "Sending..." : "Send"} disabled={loading} />
        </ContactForm>
        
        {/* Success Message */}
        {open && (
          <SuccessMessage>
            ✅ Message sent successfully! You will receive a confirmation email shortly.
          </SuccessMessage>
        )}
        
        {/* Error Message */}
        {error && (
          <ErrorMessage>
            ❌ {error}
          </ErrorMessage>
        )}
      </Wrapper>
    </Container>
  )
}

export default Contact