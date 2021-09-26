import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Baggage = () => {
    return (
        <>
            <Grid container sx={{ textAlign: 'center', marginTop: '30px' }}>
                <Grid item={true} xs={12} md={3}>
                    <Typography variant="h6" component="h6">Baggage Policy</Typography>
                    <Link href="#">Cancellation Reschedule Policy</Link>
                </Grid>
                <Grid item={true} xs={12} md={3} mt={4}>
                    <Typography variant="body1" component="div">Hand Baggage 7 kg / person</Typography>
                </Grid>
                <Grid item={true} xs={12} md={3} mt={4}>
                    <Typography variant="body1" component="div">Check-in Baggage</Typography>
                </Grid>
                <Grid item={true} xs={12} md={3} mt={4}>
                    <Typography variant="body1" component="div">1 piece x 15 kg / person</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Baggage;