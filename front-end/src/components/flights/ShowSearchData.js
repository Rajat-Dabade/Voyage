import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function ShowSearchData(props) {


  const bookHandler = (event) => {
    if (props.isLogin) {
      const data = JSON.parse(event.target.value);
      props.bookingHandler(data);
    } else {
      props.loginOpenHandler(true);
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="right">Departure</StyledTableCell>
            <StyledTableCell align="right">Araival</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Book</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.searchData.Response.Results[0].map((result) => (
            <StyledTableRow key={result.ResultIndex}>
              <StyledTableCell component="th" scope="row">
                {result.Segments[0][0].Airline.AirlineName}
              </StyledTableCell>
              <StyledTableCell align="right">{result.Segments[0][0].Origin.DepTime}</StyledTableCell>
              <StyledTableCell align="right">{result.Segments[0][0].Destination.ArrTime}</StyledTableCell>
              <StyledTableCell align="right">{result.Segments[0][0].Duration}</StyledTableCell>
              <StyledTableCell align="right">{(+result.Fare.BaseFare) + (+result.Fare.Tax)}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" endIcon={<ConfirmationNumberIcon />} value={JSON.stringify({ traceId: props.searchData.Response.TraceId, ResultIndex: result.ResultIndex })} onClick={bookHandler}>Book</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default ShowSearchData;