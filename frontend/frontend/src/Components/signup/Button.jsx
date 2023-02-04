import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ content }) {
  return (
    <>
      <StyledButton>
        <Link to="/annonce">{content}</Link>
      </StyledButton>
    </>
  )
}
const StyledButton = styled.button`
  background: linear-gradient(to right, blue 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursur: pointer;
`
