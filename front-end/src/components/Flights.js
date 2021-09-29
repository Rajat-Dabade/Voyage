import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Grid from '@mui/material/Grid';


import AutoFillInputFlightList from './flights/AutoFillInputFlightList';


import './Flights.css'

const Flights = (props) => {

    const [isReturnDate, setIsReturnDate] = useState(false);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [journeyType, setJourney] = useState(1);
    const [isSearching, setIsSearching] = useState(false);
    const [adultCount, setAdutlCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);

    const radioChangeHandler = (e) => {
        if (e.target.value === "2") {
            setJourney(2);
            setIsReturnDate(true);
        } else {
            setJourney(1);
            setIsReturnDate(false);
        }
    }

    const fromInputHandler = (value) => {
        console.log("Flight :" + value);
        setFrom(value);
    }

    const toInputHandler = (value) => {
        console.log("Flight to : " + value)
        setTo(value);
    }

    const departureDateHandler = (e) => {
        setDepartureDate(e.target.value);
    }

    const returnDateHandler = (e) => {
        setReturnDate(e.target.value);
    }

    const adultCountHandler = (event) => {
        setAdutlCount(event.target.value);
    }

    const childrenCountHandler = (event) => {
        setChildrenCount(event.target.value);
    }

    const infantCountHandler = (event) => {
        setInfantCount(event.target.value);
    }


    const onSearchHandler = () => {
        setIsSearching(true);
        props.isSearching(true);
        if (isReturnDate) {
            if (from.trim() === '' || to.trim() === '' || departureDate.trim() === '' || returnDate.trim() === '') {
                alert("Invalid Values");
                setIsSearching(false);
                props.isSearching(false);
            } else if(adultCount === 0 && childrenCount === 0 && infantCount === 0) {
                alert("Invalid Values");
                setIsSearching(false);
                props.isSearching(false);
            }
        } else {
            if (from.trim() === '' || to.trim() === '' || departureDate.trim() === '') {
                alert("Invalid Values");
                setIsSearching(false);
                props.isSearching(false);
            } else if(adultCount === 0 && childrenCount === 0 && infantCount === 0) {
                alert("Invalid Values");
                setIsSearching(false);
                props.isSearching(false);
            } else {
                console.log("One way flight booking api")
                const data = {
                    EndUserIp: "192.168.10.10",
                    AdultCount: adultCount,
                    ChildCount: childrenCount,
                    InfantCount: infantCount,
                    DirectFlight: true,
                    OneStopFlight: false,
                    JourneyType: journeyType,
                    PreferredAirlines: null,
                    Segments: [
                        {
                            Origin: from,
                            Destination: to,
                            FlightCabinClass: 1,
                            PreferredDepartureTime: departureDate + "T00: 00: 00",
                            PreferredArrivalTime: departureDate + "T00: 00: 00"
                        }
                    ],
                    Sources: null
                }


                console.log(data);
                fetch('http://localhost:3000/api/searchResult', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                }).then(res => res.json())
                    .then(data => {
                        if(data) {
                            props.searchData(data);
                        } else {
                            props.searchData(0);
                        }
                        setIsSearching(false);
                        props.isSearching(false);
                    }).catch(err => {
                        setIsSearching(false);
                        props.isSearching(false);
                        console.log("Error" + err);
                    })
            }
        }
    }

    return (
        <>
        <Box pt={5} pl={5}>
            <Typography variant="body1" gutterBottom component="p" style={{ fontWeight: 'bold', marginBottom: '15px' }}>Book Flight Tickets</Typography>
            <RadioGroup row aria-label="way" defaultValue="1" name="row-radio-buttons-group" className="radio-style" onChange={radioChangeHandler}>
                <FormControlLabel value="1" control={<Radio />} label="One Way" />
                <FormControlLabel value="2" control={<Radio />} label="Two Way" />
            </RadioGroup>
            <Box component="form" >
                <AutoFillInputFlightList label="From" className="input-field" fromInputHandler={fromInputHandler} />
                <IconButton size="small" style={{ marginTop: '30px' }}>
                    <CompareArrowsIcon />
                </IconButton>
                <AutoFillInputFlightList label="To" className="input-field" toInputHandler={toInputHandler} />

                <TextField id="outlined-basic" onChange={departureDateHandler} InputLabelProps={{ shrink: true }} label="Departure date" variant="outlined" type="date" className="input-field date-input-field" />
                <TextField id="outlined-basic" onChange={returnDateHandler} disabled={!isReturnDate} InputLabelProps={{ shrink: true }} label="Return date" variant="outlined" type="date" className="input-field date-input-field" />
    
            </Box>        <br></br><br></br>
            <Box component="form">  
            <TextField 
                id="outlined-basic" 
                label="Adult Count" 
                InputLabelProps={{ shrink: true }} 
                inputProps={{ min: 0, max: 10 }} 
                sx={{width: '150px'}} 
                value={adultCount}  
                variant="outlined" 
                type="number" 
                onChange={adultCountHandler} />
            <TextField 
                id="outlined-basic" 
                label="Children Count" 
                className="adult-count" 
                InputLabelProps={{ shrink: true }} 
                inputProps={{ min: 0, max: 10 }} 
                sx={{width: '150px'}} 
                variant="outlined" 
                type="number"
                value={childrenCount} 
                onChange={childrenCountHandler}/>
            <TextField 
                id="outlined-basic" 
                label="Infant Count" 
                className="adult-count" 
                InputLabelProps={{ shrink: true }} 
                inputProps={{ min: 0, max: 10 }} 
                sx={{width: '150px'}} 
                variant="outlined" 
                type="number" 
                value={infantCount}
                onChange={infantCountHandler} />
            {!isSearching ? <Button variant="contained" size="large" className="button-input-field" onClick={onSearchHandler}>Search</Button> :
                    <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        className="button-input-field"
                    >
                        Searching
                </LoadingButton>
                }
            </Box>
            <br></br><br></br><br></br>
        </Box>
        </>
    )
}

export default Flights;