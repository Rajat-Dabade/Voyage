import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import ReviewItinerary from './ReviewItinerary';
import FareRule from './FareRule';
import TravellerInfomation from './TravellerInfomation';

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
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Paper variant="elevation" elevation={12}> This is paper</Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Booking;

