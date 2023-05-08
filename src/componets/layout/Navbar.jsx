import React from 'react'
import { AppBar, Toolbar, Stack, Box, Typography } from '@mui/material'
import Logo from '../../assets/images/pinni.png'

const Navbar = () => {
  return (
    <>
        <AppBar sx={{backgroundColor:'#000'}} position='static'>
            <Toolbar>
                <Box sx={{width:'100%', textAlign:'center'}}>
                    <Stack direction='row' justifyContent='center' alignItems='center'>
                        <Box sx={{width:'100%', textAlign:'center'}}>
                            <img src={Logo} alt='Logo' style={{width:'120px'}} />
                        </Box>
                    </Stack>
                    
                </Box>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar