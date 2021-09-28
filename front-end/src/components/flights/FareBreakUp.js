import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const FareBreakUp = (props) => {


  const [fareQuote, setFareQuote] = useState(JSON.parse(props.fareQuote));

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
                <Typography style={{display: 'inline', float: 'right'}}>{fareQuote.Response.Results.Fare.BaseFare.toFixed(2)}</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Taxes:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{fareQuote.Response.Results.Fare.Tax.toFixed(2)}</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Airfare:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{fareQuote.Response.Results.Fare.OtherCharges.toFixed(2)}</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Convenience Fee:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{`100.00`}</Typography><br></br><br></br>
                <hr />
                <Typography style={{display: 'inline', float: 'left'}}>Grand Total:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{fareQuote.Response.Results.Fare.PublishedFare.toFixed(2)}</Typography><br></br>
        
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
