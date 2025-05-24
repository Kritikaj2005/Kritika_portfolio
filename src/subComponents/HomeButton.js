// HomeButton.js
import React from 'react'
import { FaHome } from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.div`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
  cursor: pointer;
  color: ${props => props.theme.text};
`

const HomeButton = () => (
  <Button>
    <Link to="/">
      <FaHome size={30} />
    </Link>
  </Button>
)

export default HomeButton
