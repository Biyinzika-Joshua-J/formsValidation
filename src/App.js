import './App.css';
import { Navbar, Footer } from './componets';
import { Routes, Route } from 'react-router-dom';
import { SignUp, Scanner } from './pages';
import AcceptCookies from './componets/acceptCookies/AcceptCookies';
import { useDispatch } from 'react-redux';
import {open, close} from './features/cookies/cookiePopUpSlice'
import {getUserIpAddress} from './utilities/getUserIPAddress';
import { useState, useEffect } from 'react';
import { update } from './features/country/userCountrySlice';

const visited = sessionStorage.getItem('visited');



function App() {
  const [userCountry, setUserCountry] = useState('ug');
  const dispatch = useDispatch();
  useEffect(() => { // get user country code
    getUserIpAddress().then(data => setUserCountry(data.country_code.toLowerCase()))
  }, [])
  
 // update the country
 dispatch(update({type:'country', code:userCountry}))


  if (visited === null || visited === undefined) {
    dispatch(open());
  }
 
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/scanner' element={<Scanner/>}/>
        </Routes>
      <Footer/>
      <AcceptCookies openStatus={visited} />
    </div>
  );
}

export default App;
