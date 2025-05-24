import React from 'react'
import styled from 'styled-components'
import img from "../assets/Images/bg.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import BigTitle from "../subComponents/BigTitlte"
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  padding: 2rem;
`

const Content = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  padding: 2.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.text};
  font-family: 'Ubuntu Mono', monospace;
  z-index: 1;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    color: ${props => props.theme.text};
    text-decoration: underline;
    
  }
  a:hover{
    color: #58a6ff;
      transform: translateX(3px);
      transition: all 0.3s ease-in-out;
  }
`

const ContactPage = () => {
  return (
    <MainContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
<Content  
initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
  <h2>LET'S WORK TOGETHER</h2>
  <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
    Whether you want to collaborate, have a question, or just want to say hi, I’d love to hear from you!  
    Feel free to reach out anytime.
  </motion.p>
  <motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: [0, 1, 1.2, 1], opacity: 1 }}
  transition={{ type: "spring", duration: 1, delay: 1 }}
  style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
>
  <FaEnvelope style={{ marginRight: '0.5rem', color: '#58a6ff' }} />
  <strong>Email:</strong>&nbsp;
  <a
    href="mailto:kriti202jain@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    kritikaj2005@gmail.com
  </a>
</motion.div>

<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: [0, 1, 1.2, 1], opacity: 1 }}
  transition={{ type: "spring", duration: 1, delay: 1.2 }}
  style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
>
  <FaLinkedin style={{ marginRight: '0.5rem', color: '#0e76a8' }} />
  <strong>LinkedIn:</strong>&nbsp;
  <a
    href="https://www.linkedin.com/in/kritika-jain-28466928a/"
    target="_blank"
    rel="noopener noreferrer"
  >
    linkedin.com/in/kritika-jain-28466928a/
  </a>
</motion.div>

<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: [0, 1, 1.2, 1], opacity: 1 }}
  transition={{ type: "spring", duration: 1, delay: 1.4 }}
  style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
>
  <FaGithub style={{ marginRight: '0.5rem', color: '#333' }} />
  <strong>GitHub:</strong>&nbsp;
  <a
    href="https://github.com/kritikaj2005"
    target="_blank"
    rel="noopener noreferrer"
  >
    github.com/kritikaj2005
  </a>
</motion.div>

</Content>


        <BigTitle text="CONTACT" top="80%" right="5rem" />
      </Container>
    </MainContainer>
  )
}

export default ContactPage
