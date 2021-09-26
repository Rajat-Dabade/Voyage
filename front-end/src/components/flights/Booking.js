import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import ReviewItinerary from './ReviewItinerary';

const Booking = () => {

    return (
        <>
            <Box mt={6}>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <ReviewItinerary />
                        <Grid item={true} xs={12} md={4}>
                            <Paper variant="elevation" elevation={24}> This is paper</Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Booking;

