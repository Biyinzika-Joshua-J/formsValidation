import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import { SignUpForm } from '../componets'
import SignUpSvg from '../componets/svg/signUpSvg/signUpSvg'
import useMediaQuery from '@mui/material/useMediaQuery';
import './signUp.css'

 

const SignUp = () => {
  const matchesMediumScreens = useMediaQuery('(max-width:1000px)');
  const matchesMLargeScreen = useMediaQuery('(max-width:1200px)');
  return (
    <Container maxWidth='lg'>
       <div className='homeContainer'>
        <Grid container alignItems={'center'} justifyContent={'center'}>
          <Grid item xs={12} lg={6} md={12}  sx={{display:matchesMediumScreens&&'none'}}>
            <Box sx={{padding:'5rem 0', width:'100%', textAlign:'center'}}>
            <SignUpSvg/>
            </Box>
          </Grid>
          <Grid item lg={1} md={0} xs={0}  sx={{display:matchesMLargeScreen&&'none'}}>
            <div style={{backgroundColor:'#ddd', height:'80vh', width:'1px',}}>
            </div>
          </Grid>
          <Grid item xs={12} lg={5} md={12}>
              <Box sx={{padding:'1rem 0 0 0'}}>
                <SignUpForm/>
              </Box>
          </Grid>
        </Grid>
       </div>

    </Container>
  )
}

export default SignUp