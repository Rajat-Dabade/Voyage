import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Baggage = () => {
    return (
        <>
            <Grid container sx={{ textAlign: 'center', marginTop: '30px' }}>
                <Grid item={true} xs={12} md={3} mt={1}>
                    <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}} component="">Baggage Policy</Typography>
                    <Link href="#" sx={{fontSize: '10px'}}>Cancellation Reschedule Policy</Link>
                </Grid>
                <Grid item={true} xs={12} md={4} mt={1}>
                    <Typography sx={{fontSize: '13px'}} component="div">Hand Baggage 7 kg / person</Typography>
                </Grid>
                <Grid item={true} xs={12} md={2} mt={1}>
                    <Typography sx={{fontSize: '13px'}} component="div">Check-in Baggage</Typography>
                </Grid>
                <Grid item={true} xs={12} md={3} mt={1}>
                    <Typography sx={{fontSize: '13px'}} component="div">1 piece x 15 kg / person</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Baggage;