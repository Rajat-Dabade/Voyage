import React, { useState } from 'react';
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
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                            
                        </CardContent>
                    </Collapse>
                </Card>
            </Paper>
        </>
    )
}

export default TravellerInfomation;