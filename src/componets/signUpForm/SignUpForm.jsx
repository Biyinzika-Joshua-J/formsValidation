import React from 'react'
import { Box, Typography } from '@mui/material'
import Form from './Form';
import FormStepper from '../stepper/FormStepper';
import Typer from '../typeWriter/Typer';
import TyperWelcome from '../typeWriter/typerWelcome';
import TyperPhone from '../typeWriter/typerPhone';
import TyperEmail from '../typeWriter/typerEmail';
import { useSelector } from 'react-redux';

const typers = [
  <TyperWelcome/>,
  <TyperPhone/>,
  <TyperEmail/>,
]

const SignUpForm = () => {
  const activeStep = useSelector(state => state.step.activeStep);
  const isCookiePopUpOpen = useSelector(state => state.cookiePopUp.open);

  console.log('cookie is open '+ isCookiePopUpOpen )

  return (
    <Box>
        <Box sx={{textAlign:'center', width:'100%', fontFamily:'Verdana'}}>
           {(false===false) && typers[activeStep]}
        </Box>
        <Box sx={{ }}>
          <FormStepper/>
        </Box>
        <Form/>
    </Box>
  )
}

export default SignUpForm