import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
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

const TravellerInfomation = () => {

    const [expanded, setExpanded] = useState(true);

    const [travellers, setTravellers] = useState([
        { designation: '', firstName: '', lastName: '', gender: '', dob: '' }
    ]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [isGSTChecked, setIsGSTChecked] = useState(false);

    const isGSTCheckedHandler = () => {
        setIsGSTChecked(!isGSTChecked);
    }

    useEffect(() => {
        for (let i = 1; i < 4; i++) {
            setTravellers((prevState) => {
                return [...prevState, { designation: '', firstName: '', lastName: '', gender: '', dob: '' }]
            });
        }
    }, []);


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
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        }
                        title="Traveller Information"
                        titleTypographyProps={{ variant: 'h6' }}
                    />
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>


                            {travellers.map((traveller, index) => <TravellerInputForm />)}

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
                                <GSTFormInput />
                                : null}

                            <Button variant="contained" size="large" sx={{ backgroundColor: '#4798FF', marginTop: '15px', marginBottom: '20px', marginRight: '40px', padding: '10px 50px', float: 'right' }}>Continue</Button>

                        </CardContent>
                    </Collapse>
                </Card>
            </Paper>
        </>
    )
}

export default TravellerInfomation;