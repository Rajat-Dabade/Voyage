import React, { useState, useEffect } from 'react';
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



const ReviewItinerary = (props) => {

    const [expanded, setExpanded] = useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [fareQuote, setFareQuote] = useState(JSON.parse(props.fareQuote));


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
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuote.Response.Results.Segments[0][0].Airline.AirlineName}</Typography>
                                    <Typography sx={{ fontSize: '12px' }} component="div">{fareQuote.Response.Results.Segments[0][0].Airline.AirlineCode}</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px' }} component="div">{fareQuote.Response.Results.Segments[0][0].Origin.Airport.CityName}</Typography>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuote.Response.Results.Segments[0][0].Origin.DepTime.substring(11, 16)}</Typography>
                                    <Typography sx={{ fontSize: '15px' }} component="div">{(new Date(fareQuote.Response.Results.Segments[0][0].Origin.DepTime.substring(0, 10))).toString().substring(0, 15)}</Typography>
                                    <Typography sx={{ fontSize: '13px' }} component="div">{`Terminal ` + fareQuote.Response.Results.Segments[0][0].Origin.Airport.Terminal + `, ` + fareQuote.Response.Results.Segments[0][0].Origin.Airport.AirportName + `, ` +  fareQuote.Response.Results.Segments[0][0].Origin.Airport.CityName}</Typography>
                                </Grid>
                                <Grid item={true} xs={12} md={2} mt={2}>
                                    <Typography component="div" sx={{ fontSize: '13px',color: '#6A6A6A' }}>{fareQuote.Response.Results.Segments[0][0].Duration + " min"}</Typography>
                                    <ArrowRightAltIcon sx={{ transform: 'scale(6.2, 1.1)', color: '#D6D6D6' }} />
                                    <Typography component="div" sx={{ fontSize: '11px', fontWeight: 'bolder' ,color: '#6A6A6A' }}>{fareQuote.Response.Results.IsRefundable ? `Fully Refundable` : `Not Refundable`}</Typography>
                                </Grid>
                                <Grid item={true} xs={12} md={5}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuote.Response.Results.Segments[0][0].Airline.AirlineName}</Typography>
                                    <Typography sx={{ fontSize: '12px' }} component="div">{fareQuote.Response.Results.Segments[0][0].Airline.AirlineCode}</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px' }} component="div">{fareQuote.Response.Results.Segments[0][0].Destination.Airport.CityName}</Typography>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuote.Response.Results.Segments[0][0].Destination.ArrTime.substring(11, 16)}</Typography>
                                    <Typography sx={{ fontSize: '15px' }} component="div">{(new Date(fareQuote.Response.Results.Segments[0][0].Destination.ArrTime.substring(0, 10))).toString().substring(0, 15)}</Typography>
                                    <Typography sx={{ fontSize: '13px' }} component="div">{`Terminal ` + fareQuote.Response.Results.Segments[0][0].Destination.Airport.Terminal + `, ` + fareQuote.Response.Results.Segments[0][0].Destination.Airport.AirportName + `, ` +  fareQuote.Response.Results.Segments[0][0].Destination.Airport.CityName}</Typography>
                                </Grid>
                            </Grid>
                            <br></br>
                            <hr></hr>
                            <Baggage checkInBaggage={fareQuote.Response.Results.Segments[0][0].Baggage} cabinBaggage = {fareQuote.Response.Results.Segments[0][0].CabinBaggage} />
                            {/* <Button variant="contained" size="large" sx={{ backgroundColor: '#4798FF', marginTop: '10px', marginBottom: '20px', marginRight: '40px', padding: '5px 30px', float: 'right' }}>Continue</Button> */}
                        </CardContent>
                    </Collapse>
                </Card>
            </Paper>
        </>
    )
}

export default ReviewItinerary;