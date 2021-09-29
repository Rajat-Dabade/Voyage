import React, { useEffect, useState } from 'react';

import './App.css';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import Container from '@mui/material/Container';
import Flights from './components/Flights';
import Hotels from './components/Hotels';
import Login from './components/login/Login';
import Booking from './components/flights/Booking';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ShowSearchData from './components/flights/ShowSearchData';
import Ticket from './components/flights/Ticket';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#F8FFFF'
    },
    blackColor: {
      main: "#000"
    }
  }
})


function App() {

  const [isFlight, setIsFlight] = useState(true);
  const [searchData, setSearchData] = useState({});
  const [isSearchData, setIsSearchData] = useState(false);
  const [isErrorInSearch, setIsErrorInSearch] = useState(false);
  const [isSearchedOneTime, setIsSearchedOneTime] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [isBookingHandler, setIsBookingHandler] = useState(false);
  const [fareRule, setFareRule] = useState('');
  const [fareQuote, setFareQuote] = useState('');


  useEffect(() => {
    const storeddUserLoggedInInformation = localStorage.getItem('isLogin');
    if (storeddUserLoggedInInformation === '1') {
      setIsLogin(true);
      setUsername(localStorage.getItem('username'));
    }
  }, [isLogin]);



  const showHotelHandler = (e) => {
    setIsFlight(false);
  }

  const showFlightHandler = (e) => {
    setIsFlight(true);
  }


  const searchDataHandler = (data) => {
    if (data) {
      console.log(data.status)
      if (data.Response.Error.ErrorCode !== 0) {
        setIsErrorInSearch(true);
        setIsSearchData(false);
      } else {
        setSearchData(data);
        setIsSearchData(true);
      }
    } else {
      setIsSearchData(false);
      setIsSearchedOneTime(true);
    }
  }

  const isSearchingHandler = (val) => {
    setIsSearching(val);
  }

  const loginClosedHandler = () => {
    setIsLoginClicked(false);
  }

  const loginOpenHandler = (val) => {
    setIsLoginClicked(val);
  }

  const isLoginHandler = (val) => {
    if (val === 1) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }

  const logoutHandler = () => {
    localStorage.clear();
    setIsLogin(false);
    setIsBookingHandler(false);
  }

  const bookingHandler = (data) => {
    data.EndUserIp = '192.168.11.58';
    
    const accessToken = localStorage.getItem('accessToken')
    console.log("App.js booking data" + JSON.stringify(data) + " accessToken" + accessToken);
    fetch('http://localhost:3000/api/getFareRules', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      }
    })
      .then(res => res.json())
      .then(fareRuleData => {
        setFareRule(JSON.stringify(fareRuleData));
        fetch('http://localhost:3000/api/fareQoute', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': accessToken
          }
        })
          .then(response => response.json())
          .then(fareQuoteData => {
            setFareQuote(JSON.stringify(fareQuoteData));
            setIsBookingHandler(true);
          })
      })


  }


  return (
    <>
      <Login isLoginClicked={isLoginClicked} isLoginedClosed={loginClosedHandler} isLogin={isLoginHandler} />
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="relative" color="secondary">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Voyage
          </Typography>
              {isLogin ? <><Button color="inherit" variant="outlined">{username}</Button><Button className="logout-btn" onClick={logoutHandler} variant="contained">Logout</Button></> :
                <Button color="inherit" variant="outlined" onClick={() => { setIsLoginClicked(true) }}>Login</Button>}
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
      {!isBookingHandler || !isLogin ? //make both false
        <>
          <ThemeProvider theme={theme}>
            <br></br>
            <Box sx={{ flexGrow: 1 }} className="main-header">
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={10} mt={6}>
                  <Paper elevation={3} style={{ borderRadius: '20px' }}>
                    <Box pt={2} pl={2}>
                      <Button size="small" color="blackColor" startIcon={<FlightIcon />} style={{ marginRight: '22px', borderBottom: isFlight ? '2px solid #7CDCFF' : '' }} onClick={showFlightHandler}>Flights</Button>
                      <Button size="medium" color="blackColor" startIcon={<HotelIcon />} style={{ marginRight: '22px', borderBottom: !isFlight ? '2px solid #7CDCFF' : '' }} onClick={showHotelHandler}>Hotels</Button>
                    </Box>
                    {isFlight ? <Flights searchData={searchDataHandler} isSearching={isSearchingHandler} /> : <Hotels />}

                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </ThemeProvider>
          <br></br><br></br> <br></br>
          <Container maxWidth="lg" >
            {isSearching ? <p>Searching for the data</p> : isSearchData ?
              <ShowSearchData searchData={searchData} isLogin={isLogin} loginOpenHandler={loginOpenHandler} bookingHandler={bookingHandler} /> : isErrorInSearch ? <p>Error occur in search</p> : isSearchedOneTime ? <p>No result found yet</p> : <p>Please search the data</p>}
          </Container>
        </> : <Booking fareRule={fareRule} fareQuote={fareQuote} />}
    </>
  );
}

export default App;