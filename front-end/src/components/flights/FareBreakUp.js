import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import { Divider } from "@mui/material";

const FareBreakUp = () => {
  return (
    <>

      <Paper
        variant="elevation"
        elevation={12}
        sx={{ marginRight: "40px", borderRadius: "70px" }}
      >
        <Card sx={{ minWidth: 275, borderRadius: '20px' }}>
          <CardContent>

            <Typography variant="h5" component="div" align='left'>
              Fare Breakup
            </Typography>
                
                <hr />
                <Typography style={{display: 'inline', float: 'left'}}>Adults:</Typography>
                <Typography style={{display: 'inline', float: 'left'}}>1</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Base Fare:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>$400</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Taxes:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>$500</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Airfare:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>$600</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Convenience Fee:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>$100</Typography><br></br><br></br>
                <hr />
                <Typography style={{display: 'inline', float: 'left'}}>Grand Total:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>$5000</Typography><br></br>
        
        </CardContent>
          
        <CardActions>
        <Button variant="contained" style={{margin: '0 auto'}}>
         Proceed to pay
        </Button>
        </CardActions>
        
        </Card>
      </Paper>
    </>
  );
};

export default FareBreakUp;
