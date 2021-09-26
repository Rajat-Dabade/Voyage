import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import ReviewItinerary from './ReviewItinerary';
import FareRule from './FareRule';
import TravellerInfomation from './TravellerInfomation';
import FareBreakUp from './FareBreakUp';
import { Button } from '@mui/material';

const Booking = () => {

    return (
        <>
            <Box mt={6}>
                <Container maxWidth="lg">
                    <Grid container spacing={0}>
                        <Grid item={true} xs={12} md={8}>
                            <ReviewItinerary />
                            <FareRule />
                            <TravellerInfomation />
                            <br></br>
                            <Button variant="outlined" sx={{ margin: '0 7px' ,width: '94%', padding: '15px'}}>Proceed to Book</Button>
                            <br></br><br></br>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <FareBreakUp />

                        </Grid>
                        
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Booking;

