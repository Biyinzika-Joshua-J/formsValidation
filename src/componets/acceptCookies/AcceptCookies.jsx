import { useState } from 'react';
import { Drawer, Typography } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import useMediaQuery from '@mui/material/useMediaQuery';
import {open as cookieOpen, close} from '../../features/cookies/cookiePopUpSlice';
import { useDispatch } from 'react-redux';


function AcceptCookies({ openStatus }) {
    const dispatch = useDispatch();
    const matches = useMediaQuery('(min-width:700px)');
    const [open, setOpen] = useState(openStatus ? false : true);
    
    const toggleDrawer = (newOpen) => () => {
        if (newOpen === false) {
            dispatch(close());
        }
        setOpen(newOpen);
    };
    return (
      
            <Drawer
                anchor={'bottom'}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              

            >
                <div style={{width:'100%'}}>
                    <Typography sx={{ p: 2, color: 'text.secondary', backgroundColor: '#000', color: '#fff', textAlign: 'center' }}> <CookieIcon sx={{ fontSize: '3rem', marginRight: '1rem' }} />
                        By clicking "Accept all Cookies", you agree PinniSOFT can store cookies on your device and disclose information in accordance with our  <a href="#" style={{ color: 'green' }}>Cookie Policy</a></Typography>
                    <div style={{ backgroundColor: '#000', textAlign: 'center' }}>
                        <button style={{ backgroundColor: 'green', border: '0px solid', cursor: 'pointer', color: '#fff', width: 'contain', padding: '.5rem' }} onClick={toggleDrawer(false)}>Accept all Cookies</button>
                    </div>
                </div>
            </Drawer>

    );
}



export default AcceptCookies;