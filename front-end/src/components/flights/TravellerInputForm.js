import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TravellerInputForm = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Typography variant="body1" component="div" sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '14px' }}>Adults: </Typography>
            <RadioGroup sx={{ marginLeft: '15px', marginTop: '10px' }} row aria-label="degination" name="row-radio-buttons-group">
                <FormControlLabel value="Mr" control={<Radio />} label="Mr" />
                <FormControlLabel value="Ms" control={<Radio />} label="Ms" />
                <FormControlLabel value="Mrs" control={<Radio />} label="Mrs" />
            </RadioGroup>


            <FormControl sx={{ width: '100px', marginLeft: '15px', marginTop: '10px' }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Gender"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                </Select>
            </FormControl>


            <Grid container ml={2} mr={2} spacing={5}>
                <Grid xs={12} md={4} mt={5}>
                    <TextField id="firstName" label="First Name" variant="standard" />
                </Grid>
                <Grid xs={12} md={4} mt={5}>
                    <TextField id="lastName" label="Last Name" variant="standard" />
                </Grid>
                <Grid xs={12} md={4} mt={5}>
                    <TextField InputLabelProps={{ shrink: true }} type="date" id="DOB" label="Date of Birth" variant="standard" />
                </Grid>
            </Grid>
        </>
    );
}

export default TravellerInputForm;