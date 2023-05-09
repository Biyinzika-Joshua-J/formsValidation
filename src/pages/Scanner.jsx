import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import { ScannerContainer } from '../componets'
import useMediaQuery from '@mui/material/useMediaQuery';
import SignUpSvg from '../componets/svg/signUpSvg/signUpSvg'
import './scanner.css'
import Html5QrcodePlugin from '../componets/qrCode/qrCodePlugin';

const Scanner = () => {
    const onNewScanResult = (decodedText, decodedResult) => {
        // handle decoded results here
        console.log(decodedResult)
        console.log(decodedText)
    };
  
    const matchesMediumScreens = useMediaQuery('(max-width:1000px)');
  const matchesMLargeScreen = useMediaQuery('(max-width:1200px)');
  return (
    <Container maxWidth='lg'>
       <div className='scannerPage'>
        <Grid container alignItems={'center'} justifyContent={'center'}>
          <Grid item xs={12} lg={6} md={12}  sx={{display:matchesMediumScreens&&'none', }}>
            <Box sx={{padding:'1rem 0', width:'100%', textAlign:'center', height:'100%', }}>
                    <SignUpSvg/>
            </Box>
          </Grid>
         
          <Grid item xs={12} lg={6} md={12}  >
              <Box sx={{padding:'1rem 0 1.2rem 0', backgroundColor:'#000', color:'#fff'}}>
                <ScannerContainer/>
              </Box>
          </Grid>
        </Grid>
       </div>

       <div className="App">
            <Html5QrcodePlugin
                fps={10}
                qrbox={350}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>

    </Container>
  )
}

export default Scanner