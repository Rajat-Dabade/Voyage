import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import Baggage from './Baggage';


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



const ReviewItinerary = () => {

    const [expanded, setExpanded] = useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <>

            <Paper variant="elevation" elevation={12} sx={{ marginRight: '40px', borderRadius: '70px' }}>
                <Card sx={{ borderRadius: '20px' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: blue[400] }} aria-label="recipe">
                                01
                                            </Avatar>
                        }
                        action={
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        }
                        title="Review Itinerary"
                        titleTypographyProps={{ variant: 'h6' }}
                    />
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                                <Grid item={true} xs={12} md={5}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">Indigo</Typography>
                                    <Typography sx={{ fontSize: '12px' }} component="div">G8-127</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px' }} component="div">Delhi</Typography>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">19:45</Typography>
                                    <Typography sx={{ fontSize: '15px' }} component="div">Sun, 26 Sep 21</Typography>
                                    <Typography sx={{ fontSize: '13px' }} component="div">Terminal 2,
                                    Indira Gandhi Airport,
                                    Delhi
                                        </Typography>
                                </Grid>
                                <Grid item={true} xs={12} md={2} mt={2}>
                                    <Typography component="div" sx={{ fontSize: '13px',color: '#6A6A6A' }}>2h 5m</Typography>
                                    <ArrowRightAltIcon sx={{ transform: 'scale(6.2, 1.1)', color: '#D6D6D6' }} />
                                    <Typography component="div" sx={{ fontSize: '11px', fontWeight: 'bolder' ,color: '#6A6A6A' }}>Partially Refundable</Typography>
                                </Grid>
                                <Grid item={true} xs={12} md={5}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">Indigo</Typography>
                                    <Typography sx={{ fontSize: '12px' }} component="div">G8-127</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px' }} component="div">Mumbai</Typography>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">19:45</Typography>
                                    <Typography sx={{ fontSize: '15px' }} component="div">Sun, 26 Sep 21</Typography>
                                    <Typography sx={{ fontSize: '13px' }} component="div">Terminal 2,
                                    Indira Gandhi Airport,
                                    Delhi
                                        </Typography>
                                </Grid>
                            </Grid>
                            <br></br>
                            <hr></hr>
                            <Baggage />
                            <Button variant="contained" size="large" sx={{ backgroundColor: '#4798FF', marginTop: '10px', marginBottom: '20px', marginRight: '40px', padding: '10px 50px', float: 'right' }}>Continue</Button>
                        </CardContent>
                    </Collapse>
                </Card>
            </Paper>
        </>
    )
}

export default ReviewItinerary;