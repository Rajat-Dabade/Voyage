import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import TravellerInputForm from './TravellerInputForm';
import GSTFormInput from './GSTFormInput';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const TravellerInfomation = (props) => {

    const [expanded, setExpanded] = useState(true);
    const [travellers, setTravellers] = useState([
        { designation: '', firstName: '', lastName: '', gender: '', dob: '' }
    ]);
    const [gstNumber, setGstNumber] = useState('');
    const [companyGstEmail, setCompanyGstEmail] = useState('');
    const [companyName, setCompanyName] = useState('');

    const [passengerType, setPassengerType] = useState([]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [isGSTChecked, setIsGSTChecked] = useState(false);

    const [fareQuote, setFareQuote] = useState({});

    const isGSTCheckedHandler = () => {
        setIsGSTChecked(!isGSTChecked);
    }

    useEffect(() => {

        const fareQuoteData = JSON.parse(props.fareQuote);
        setFareQuote(fareQuoteData);
        let count = 0;
        setTravellers([]);
        setPassengerType([]);
        for (let i = 0; i < 3; i++) {
            if (fareQuoteData.Response.Results.FareBreakdown[i] !== undefined)
                count = count + fareQuoteData.Response.Results.FareBreakdown[i].PassengerCount;
        }
        for (let i = 0; i < fareQuoteData.Response.Results.FareBreakdown.length; i++) {
            for (let j = 0; j < fareQuoteData.Response.Results.FareBreakdown[i].PassengerCount; j++) {
                switch (fareQuoteData.Response.Results.FareBreakdown[i].PassengerType) {
                    case 1:
                        setPassengerType((prevState) => {
                            return [...prevState, "Adult"];
                        });
                        break;
                    case 2:
                        setPassengerType((prevState) => {
                            return [...prevState, "Children"];
                        });
                        break;
                    case 3:
                        setPassengerType((prevState) => {
                            return [...prevState, "Infant"];
                        });
                        break;
                }
            }

        }
        for (let i = 0; i < count; i++) {
            setTravellers((prevState) => {
                return [...prevState, { designation: '', firstName: '', lastName: '', gender: '', dob: '' }]
            });
        }

        console.log("Passenger type jfaksldjfklasjfklasjlf: " + JSON.stringify(passengerType));
    }, []);


    const inputFieldChangeHandler = (index, event) => {
        const values = [...travellers];
        values[index][event.target.name] = event.target.value;
        setTravellers(values);
        console.log(travellers);
    }

    const getNumberHandler = (value) => {
        if (isGSTChecked) {
            setGstNumber(value);
        }
    }

    const getCompanyGstEmailHandler = (value) => {
        if (isGSTChecked) {
            setCompanyGstEmail(value);
        }
    }

    const getCompanyNameHandler = (value) => {
        if (isGSTChecked) {
            setCompanyName(value)
        }
    }

    const proceedToBook = (event) => {

        let passengerCount = 0;
        for (let i = 0; i < 3; i++) {
            if (fareQuote.Response.Results.FareBreakdown[i] !== undefined)
                passengerCount = passengerCount + fareQuote.Response.Results.FareBreakdown[i].PassengerCount;
        }
        const passenger = [];
        console.log("Passenger Count : " + passengerCount)
        let data = {};
        let count = 0;
        for (let i = 0; i < fareQuote.Response.Results.FareBreakdown.length; i++) {
            for (let j = 0; j < fareQuote.Response.Results.FareBreakdown[i].PassengerCount; j++) {
                data = {
                    Title: travellers[count].designation,
                    FirstName: travellers[count].firstName,
                    LastName: travellers[count].lastName,
                    DateOfBirth: travellers[count].dob + "T00:00:00",
                    Gender: 1,
                    PassportNo: "",
                    PassportExpiry: "",
                    AddressLine1: "123, Test",
                    AddressLine2: "",
                    Fare: {
                        Currency: fareQuote.Response.Results.FareBreakdown[i].Currency,
                        BaseFare: fareQuote.Response.Results.FareBreakdown[i].BaseFare / fareQuote.Response.Results.FareBreakdown[i].PassengerCount,
                        Tax: fareQuote.Response.Results.FareBreakdown[i].Tax / fareQuote.Response.Results.FareBreakdown[i].PassengerCount,
                        YQTax: fareQuote.Response.Results.FareBreakdown[i].YQTax / fareQuote.Response.Results.FareBreakdown[i].PassengerCount,
                        AdditionalTxnFeePub: fareQuote.Response.Results.FareBreakdown[i].AdditionalTxnFeePub / fareQuote.Response.Results.FareBreakdown[i].PassengerCount,
                        AdditionalTxnFeeOfrd: fareQuote.Response.Results.FareBreakdown[i].AdditionalTxnFeeOfrd / fareQuote.Response.Results.FareBreakdown[i].PassengerCount,
                        OtherCharges: fareQuote.Response.Results.Fare.OtherCharges,
                        Discount: fareQuote.Response.Results.Fare.Discount,
                        PublishedFare: fareQuote.Response.Results.Fare.PublishedFare,
                        OfferedFare: fareQuote.Response.Results.Fare.OfferedFare,
                        TdsOnCommission: fareQuote.Response.Results.Fare.TdsOnCommission,
                        TdsOnPLB: fareQuote.Response.Results.Fare.TdsOnPLB,
                        TdsOnIncentive: fareQuote.Response.Results.Fare.TdsOnIncentive,
                        ServiceFee: fareQuote.Response.Results.Fare.ServiceFee,
                        AirTransFee: fareQuote.Response.Results.Fare.AirTransFee ? fareQuote.Response.Results.Fare.AirTransFee : 0,
                        TransactionFee: fareQuote.Response.Results.Fare.TransactionFee ? fareQuote.Response.Results.Fare.TransactionFee : 0
                    },
                    City: fareQuote.Response.Results.Segments[0][0].Origin.Airport.CityName,
                    CountryCode: fareQuote.Response.Results.Segments[0][0].Origin.Airport.CountryCode,
                    CountryName: fareQuote.Response.Results.Segments[0][0].Origin.Airport.CountryName,
                    CellCountryCode: "+92581-",
                    ContactNo: "1234567890",
                    Nationality: "IN",
                    Email: "harsh@tbtq.in"
                }
                if (count === 0) {
                    data.IsLeadPax = true;
                } else {
                    data.IsLeadPax = false;
                }

                switch (passengerType[count]) {
                    case "Adult":
                        data.PaxType = 1;
                        break;
                    case "Children":
                        data.PaxType = 2;
                        break;
                    case "Infant":
                        data.PaxType = 3;
                        break;
                }

                if (isGSTChecked) {
                    data.GSTCompanyAddress = "";
                    data.GSTCompanyContactNumber = null;
                    data.GSTCompanyName = companyName;
                    data.GSTNumber = gstNumber;
                    data.GSTCompanyEmail = companyGstEmail;
                }
                count++;
                passenger.push(data);
            }
        }

        const requestObject = {
            EndUserIp: "192.168.11.120",
            TraceId: fareQuote.Response.TraceId,
            ResultIndex: fareQuote.Response.Results.ResultIndex,
            Passengers: [...passenger]
        }

        console.log(requestObject);

        if (fareQuote.Response.Results.IsLCC) {
            fetch('http://localhost:3000/api/ticket/lcc', {
                method: 'POST',
                body: JSON.stringify(requestObject),
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('accessToken')
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Ticketing  : " + JSON.stringify(data));
                }).catch(err => {
                    console.log("Error occur");
                })
        } else {
            fetch('http://localhost:3000/api/book', {
                method: 'POST',
                body: JSON.stringify(requestObject),
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('accessToken')
                }
            }).then(res => res.json)
            .then(data => {
                console.log(data);
            });
        }
    }

    return (
        <>

            <Paper variant="elevation" elevation={12} sx={{ marginRight: '40px', borderRadius: '70px', marginTop: '20px' }}>
                <Card sx={{ borderRadius: '20px' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: blue[300] }} aria-label="recipe">
                                03
                            </Avatar>
                        }
                        action={
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more">
                                <ExpandMoreIcon />
                            </ExpandMore>
                        }
                        title="Traveller Information"
                        titleTypographyProps={{ variant: 'h6' }}
                    />
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {travellers.map((traveller, index) => <TravellerInputForm passengerType={passengerType[index]} key={index} traveller={traveller} index={index} inputFieldChangeHandler={inputFieldChangeHandler} />)}
                            <br></br>
                            <Typography variant="body1" sx={{ marginLeft: '15px', marginTop: '25px', fontWeight: 'bold' }} component="div">Contact Details:</Typography>
                            <Typography sx={{ marginLeft: '15px', fontSize: '14px', marginTop: '10px', color: '#898989' }} component="div">*Ticket will be send to below mobile number and Email Address</Typography>
                            <Grid container ml={2} mr={2} mt={1} spacing={4}>
                                <Grid xs={12} md={6} lg={6} xl={6}>
                                    <TextField id="phone" label="Phone" variant="standard" sx={{ width: 260 }} />
                                </Grid>
                                <Grid xs={12} md={6} lg={6} xl={6}>
                                    <TextField id="email" label="E-mail" variant="standard" sx={{ width: 260 }} />
                                </Grid>
                            </Grid>
                            <FormControlLabel sx={{ marginLeft: '7px', marginTop: '15px' }}
                                label="Add GST details"
                                control={
                                    <Checkbox onChange={isGSTCheckedHandler} />
                                }
                            />
                            {isGSTChecked ?
                                <GSTFormInput
                                    gstNumber={gstNumber}
                                    companyGstEmail={companyGstEmail}
                                    companyName={companyName}
                                    getNumberHandler={getNumberHandler}
                                    getCompanyGstEmailHandler={getCompanyGstEmailHandler}
                                    getCompanyNameHandler={getCompanyNameHandler} />
                                : null}

                            <Button variant="contained" size="large" sx={{ backgroundColor: '#4798FF', marginTop: '15px', marginBottom: '20px', marginRight: '40px', padding: '10px 50px', float: 'right' }} onClick={proceedToBook}>Proceed to Book</Button>

                        </CardContent>
                    </Collapse>
                </Card>
            </Paper>
        </>
    )
}

export default TravellerInfomation;