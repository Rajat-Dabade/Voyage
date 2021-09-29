import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import { fontWeight } from "@mui/system";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Ticket = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
   
        <Paper
         variant="elevation"
         elevation={12}
         sx={{ marginRight: "40px", borderRadius: "70px" }}
        >
      
      <Card sx={{ borderRadius: '20px'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
              T
            </Avatar>
          }
          title="Ticket"
          titleTypographyProps={{ variant: "h6" }}
        />
        
        <CardContent>

        <Grid container spacing={2}>
        <Grid item xs={8}>

        <Typography variant="body2" color="text.secondary">
           
        </Typography>
                <Typography style={{display: 'inline', float: 'left'}}>PNR Number: </Typography>
                <Typography style={{display: 'inline', fontWeight: 'bolder'}}>13141323</Typography><br></br><br></br>
                <Typography style={{display: 'inline'}}>Booking ID: </Typography>
                <Typography style={{display: 'inline', fontWeight: 'bolder'}}>3123123</Typography><br></br><br></br>
                <Typography style={{display: 'inline'}}>Transaction ID: </Typography>
                <Typography style={{display: 'inline', fontWeight: 'bolder'}}>312312312</Typography><br></br><br></br>
        
                </Grid>
            
                <Grid item xs={4}>
        
                <BookmarksIcon sx={{width: '400px', height: '300px'}} color="primary" />
        
                </Grid>
            
                </Grid>
        
        </CardContent>

       
        
        
        <CardActions disableSpacing>

        </CardActions>

        </Card>

    </Paper>
        
          
        
  );
};

export default Ticket;
