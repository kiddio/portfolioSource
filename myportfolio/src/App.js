import React from 'react'
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Button
} from 'rebass'
import { ThemeProvider } from 'emotion-theming'
const theme = {
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64
  ],
  colors: {
    primary: '#07c',
    gray: '#f6f6ff',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
  },
}

function test(props) {
  function handleClick(e){
    e.preventDefault()
    console.log("TEST")
  }
  return(
    <Button variant='primary' onClick={handleClick}>Beep</Button>
  )
}

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
    {test()}
  </ThemeProvider>
