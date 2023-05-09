import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { QrCode } from '@mui/icons-material'
import QrCodeImage from '../../assets/images/scanner/qr-code.png';
import QrCodeIcon from '../../assets/images/scanner/qr-code-icon.png';

const ScannerContainer = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', }}>
      <Box sx={{padding:'0 0 2rem 0'}}>
        <Typography variant='h5'>
          Scan Your QR Code
        </Typography>
      </Box>
      <Box width={'70%'} height={'70%'} sx={{display:'flex', justifyContent:'center', padding:'0 0 2rem 0'}} >
          <img src={QrCodeImage} alt="QRCode" height={'70%'} width={'70%'}/>
      </Box>
      <Box>
         <Button variant='contained' sx={{backgroundColor:'green', '&:hover':{backgroundColor:'orange'}}}>
            <img src={QrCodeIcon} alt="QR code" style={{marginRight:'1rem', padding:'.3rem'}} />
            Scan QR Code
         </Button>
      </Box>
    </Box>
  )
}

export default ScannerContainer