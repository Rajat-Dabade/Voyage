import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ReviewItinerary from './ReviewItinerary';
import FareRule from './FareRule';
import TravellerInfomation from './TravellerInfomation';
import FareBreakUp from './FareBreakUp';
import { Button } from '@mui/material';

const Booking = (props) => {

    console.log("FareRulesjfdklsjfklasjfklasjdklfjaskldfjksaljfklasjdfklasj" + props.fareRule);

    const collectData = (data, isGst) => {
        console.log(data, isGst);
    }

    const travellerData = {
        Adult : 2,
        Childen : 1,
        Infant: 1
    }

    const ticketDataHandler = (data) => {
        props.getTicketData(data);
    }

    return (
        <>
            <Box mt={6}>
                <Container maxWidth="lg">
                    <Grid container spacing={0}>
                        <Grid item={true} xs={12} md={8}>
                            <ReviewItinerary fareQuote={props.fareQuote}/>
                            <FareRule />
                            <TravellerInfomation getTicketData={ticketDataHandler} fareQuote={props.fareQuote}/>
                            <br></br><br></br><br></br>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <FareBreakUp fareQuote={props.fareQuote}/>
                        </Grid>
                        
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Booking;

