import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function AutoFillInputFlightList(props) {

    const inputHandler = (e) => {
        if(props.label === "From") {
            props.fromInputHandler(e.target.innerText);
        }
        if(props.label === "To"){
            props.toInputHandler(e.target.innerText);
        }
    }

    return (
        <>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                onChange={inputHandler}
                className={props.className}
                options={top100Films.map((option) => option.label)}
                renderInput={(params) => <TextField {...params} label={props.label}/>}
            />

        </>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    {
      "label": "AGR",
      "city": "Agra",
      "countryCode": "IN"
    },
    {
      "label": "AGX",
      "city": "Agatti Island",
      "countryCode": "IN"
    },
    {
      "label": "AIP",
      "city": "Adampur",
      "countryCode": "IN"
    },
    {
      "label": "AJL",
      "city": "Aizawl",
      "countryCode": "IN"
    },
    {
      "label": "AKD",
      "city": "Akola",
      "countryCode": "IN"
    },
    {
      "label": "AMD",
      "city": "Ahmedabad",
      "countryCode": "IN"
    },
    {
      "label": "ATQ",
      "city": "Amritsar",
      "countryCode": "IN"
    },
    {
      "label": "BBI",
      "city": "Bhubaneshwar",
      "countryCode": "IN"
    },
    {
      "label": "BDQ",
      "city": "Vadodara",
      "countryCode": "IN"
    },
    {
      "label": "BEK",
      "city": "Bareli",
      "countryCode": "IN"
    },
    {
      "label": "BEP",
      "city": "Bellary",
      "countryCode": "IN"
    },
    {
      "label": "BHJ",
      "city": "Bhuj",
      "countryCode": "IN"
    },
    {
      "label": "BHO",
      "city": "Bhopal",
      "countryCode": "IN"
    },
    {
      "label": "BHU",
      "city": "Bhavnagar",
      "countryCode": "IN"
    },
    {
      "label": "BKB",
      "city": "Bikaner",
      "countryCode": "IN"
    },
    {
      "label": "BLR",
      "city": "Bangalore",
      "countryCode": "IN"
    },
    {
      "label": "BOM",
      "city": "Mumbai",
      "countryCode": "IN"
    },
    {
      "label": "BPM",
      "city": "Hyderabad",
      "countryCode": "IN"
    },
    {
      "label": "BUP",
      "city": "Bhatinda",
      "countryCode": "IN"
    },
    {
      "label": "CBD",
      "city": "Car Nicobar",
      "countryCode": "IN"
    },
    {
      "label": "CCJ",
      "city": "Calicut",
      "countryCode": "IN"
    },
    {
      "label": "CCU",
      "city": "Kolkata",
      "countryCode": "IN"
    },
    {
      "label": "CDP",
      "city": "Cuddapah",
      "countryCode": "IN"
    },
    {
      "label": "CJB",
      "city": "Coimbatore",
      "countryCode": "IN"
    },
    {
      "label": "COH",
      "city": "Cooch Behar",
      "countryCode": "IN"
    },
    {
      "label": "COK",
      "city": "Kochi",
      "countryCode": "IN"
    },
    {
      "label": "DAE",
      "city": "Daparizo",
      "countryCode": "IN"
    },
    {
      "label": "DAI",
      "city": "Darjeeling",
      "countryCode": "IN"
    },
    {
      "label": "DBD",
      "city": "Dhanbad",
      "countryCode": "IN"
    },
    {
      "label": "DED",
      "city": "Dehra Dun",
      "countryCode": "IN"
    },
    {
      "label": "DEL",
      "city": "Delhi",
      "countryCode": "IN"
    },
    {
      "label": "DEP",
      "city": "Deparizo",
      "countryCode": "IN"
    },
    {
      "label": "DHM",
      "city": "Dharamsala",
      "countryCode": "IN"
    },
    {
      "label": "DIB",
      "city": "Dibrugarh",
      "countryCode": "IN"
    },
    {
      "label": "DIU",
      "city": "Diu",
      "countryCode": "IN"
    },
    {
      "label": "DMU",
      "city": "Dimapur",
      "countryCode": "IN"
    },
    {
      "label": "GAU",
      "city": "Guwahati",
      "countryCode": "IN"
    },
    {
      "label": "GAY",
      "city": "Gaya",
      "countryCode": "IN"
    },
    {
      "label": "GOI",
      "city": "Goa",
      "countryCode": "IN"
    },
    {
      "label": "GOP",
      "city": "Gorakhpur",
      "countryCode": "IN"
    },
    {
      "label": "GUX",
      "city": "Guna",
      "countryCode": "IN"
    },
    {
      "label": "GWL",
      "city": "Gwalior",
      "countryCode": "IN"
    },
    {
      "label": "HBX",
      "city": "Hubli",
      "countryCode": "IN"
    },
    {
      "label": "HJR",
      "city": "Khajuraho",
      "countryCode": "IN"
    },
    {
      "label": "HSS",
      "city": "Hissar",
      "countryCode": "IN"
    },
    {
      "label": "HYD",
      "city": "Hyderabad",
      "countryCode": "IN"
    },
    {
      "label": "IDR",
      "city": "Indore",
      "countryCode": "IN"
    },
    {
      "label": "IMF",
      "city": "Imphal",
      "countryCode": "IN"
    },
    {
      "label": "ISK",
      "city": "Nasik",
      "countryCode": "IN"
    },
    {
      "label": "IXA",
      "city": "Agartala",
      "countryCode": "IN"
    },
    {
      "label": "IXB",
      "city": "Bagdogra",
      "countryCode": "IN"
    },
    {
      "label": "IXC",
      "city": "Chandigarh",
      "countryCode": "IN"
    },
    {
      "label": "IXD",
      "city": "Allahabad",
      "countryCode": "IN"
    },
    {
      "label": "IXE",
      "city": "Mangalore",
      "countryCode": "IN"
    },
    {
      "label": "IXG",
      "city": "Belgaum",
      "countryCode": "IN"
    },
    {
      "label": "IXH",
      "city": "Kailashahar",
      "countryCode": "IN"
    },
    {
      "label": "IXI",
      "city": "Lilabari",
      "countryCode": "IN"
    },
    {
      "label": "IXJ",
      "city": "Jammu",
      "countryCode": "IN"
    },
    {
      "label": "IXK",
      "city": "Keshod",
      "countryCode": "IN"
    },
    {
      "label": "IXL",
      "city": "Leh",
      "countryCode": "IN"
    },
    {
      "label": "IXM",
      "city": "Madurai",
      "countryCode": "IN"
    },
    {
      "label": "IXN",
      "city": "Khowai",
      "countryCode": "IN"
    },
    {
      "label": "IXP",
      "city": "Pathankot",
      "countryCode": "IN"
    },
    {
      "label": "IXQ",
      "city": "Kamalpur",
      "countryCode": "IN"
    },
    {
      "label": "IXR",
      "city": "Ranchi",
      "countryCode": "IN"
    },
    {
      "label": "IXS",
      "city": "Silchar",
      "countryCode": "IN"
    },
    {
      "label": "IXT",
      "city": "Pasighat",
      "countryCode": "IN"
    },
    {
      "label": "IXU",
      "city": "Aurangabad",
      "countryCode": "IN"
    },
    {
      "label": "IXV",
      "city": "Along",
      "countryCode": "IN"
    },
    {
      "label": "IXW",
      "city": "Jamshedpur",
      "countryCode": "IN"
    },
    {
      "label": "IXY",
      "city": "Kandla",
      "countryCode": "IN"
    },
    {
      "label": "IXZ",
      "city": "Port Blair",
      "countryCode": "IN"
    },
    {
      "label": "JAI",
      "city": "Jaipur",
      "countryCode": "IN"
    },
    {
      "label": "JDH",
      "city": "Jodhpur",
      "countryCode": "IN"
    },
    {
      "label": "JGA",
      "city": "Jamnagar",
      "countryCode": "IN"
    },
    {
      "label": "JGB",
      "city": "Jagdalpur",
      "countryCode": "IN"
    },
    {
      "label": "JLR",
      "city": "Jabalpur",
      "countryCode": "IN"
    },
    {
      "label": "JRH",
      "city": "Jorhat",
      "countryCode": "IN"
    },
    {
      "label": "JSA",
      "city": "Jaisalmer",
      "countryCode": "IN"
    },
    {
      "label": "KLH",
      "city": "Kolhapur",
      "countryCode": "IN"
    },
    {
      "label": "KNU",
      "city": "Kanpur",
      "countryCode": "IN"
    },
    {
      "label": "KQH",
      "city": "KISHANGARH",
      "countryCode": "IN"
    },
    {
      "label": "KTU",
      "city": "Kota",
      "countryCode": "IN"
    },
    {
      "label": "KUU",
      "city": "Kulu",
      "countryCode": "IN"
    },
    {
      "label": "LDA",
      "city": "Malda",
      "countryCode": "IN"
    },
    {
      "label": "LKO",
      "city": "Lucknow",
      "countryCode": "IN"
    },
    {
      "label": "ltu",
      "city": "latur",
      "countryCode": "IN"
    },
    {
      "label": "LUH",
      "city": "Ludhiana",
      "countryCode": "IN"
    },
    {
      "label": "MAA",
      "city": "Chennai",
      "countryCode": "IN"
    },
    {
      "label": "MOH",
      "city": "Mohanbari",
      "countryCode": "IN"
    },
    {
      "label": "MYQ",
      "city": "Mysore",
      "countryCode": "IN"
    },
    {
      "label": "MZA",
      "city": "Muzaffarnagar",
      "countryCode": "IN"
    },
    {
      "label": "MZU",
      "city": "Muzaffarpur",
      "countryCode": "IN"
    },
    {
      "label": "NAG",
      "city": "Nagpur",
      "countryCode": "IN"
    },
    {
      "label": "NDC",
      "city": "Nanded",
      "countryCode": "IN"
    },
    {
      "label": "NMB",
      "city": "Daman",
      "countryCode": "IN"
    },
    {
      "label": "NVY",
      "city": "Neyveli",
      "countryCode": "IN"
    },
    {
      "label": "OMN",
      "city": "Osmanabad",
      "countryCode": "IN"
    },
    {
      "label": "PAB",
      "city": "Bilaspur",
      "countryCode": "IN"
    },
    {
      "label": "PAT",
      "city": "Patna",
      "countryCode": "IN"
    },
    {
      "label": "PBD",
      "city": "Porbandar",
      "countryCode": "IN"
    },
    {
      "label": "PGH",
      "city": "Pantnagar",
      "countryCode": "IN"
    },
    {
      "label": "PNQ",
      "city": "Pune",
      "countryCode": "IN"
    },
    {
      "label": "PNY",
      "city": "Pondicherry",
      "countryCode": "IN"
    },
    {
      "label": "PUT",
      "city": "Puttaparthi",
      "countryCode": "IN"
    },
    {
      "label": "PYB",
      "city": "Jeypore",
      "countryCode": "IN"
    },
    {
      "label": "PYG",
      "city": "Pakyong",
      "countryCode": "IN"
    },
    {
      "label": "QJU",
      "city": "Jullundur",
      "countryCode": "IN"
    },
    {
      "label": "QNB",
      "city": "Anand",
      "countryCode": "IN"
    },
    {
      "label": "QNF",
      "city": "Faridabad",
      "countryCode": "IN"
    },
    {
      "label": "QNW",
      "city": "Nawanshahar",
      "countryCode": "IN"
    },
    {
      "label": "RAJ",
      "city": "Rajkot",
      "countryCode": "IN"
    },
    {
      "label": "RDP",
      "city": "Durgapur",
      "countryCode": "IN"
    },
    {
      "label": "REW",
      "city": "Rewa",
      "countryCode": "IN"
    },
    {
      "label": "RGH",
      "city": "Balurghat",
      "countryCode": "IN"
    },
    {
      "label": "RJA",
      "city": "Rajahmundry",
      "countryCode": "IN"
    },
    {
      "label": "RJI",
      "city": "Rajouri",
      "countryCode": "IN"
    },
    {
      "label": "RMD",
      "city": "Ramagundam",
      "countryCode": "IN"
    },
    {
      "label": "RNK",
      "city": "SURFACE",
      "countryCode": "IN"
    },
    {
      "label": "RPR",
      "city": "Raipur",
      "countryCode": "IN"
    },
    {
      "label": "RRK",
      "city": "Rourkela",
      "countryCode": "IN"
    },
    {
      "label": "RTC",
      "city": "Ratnagiri",
      "countryCode": "IN"
    },
    {
      "label": "RUP",
      "city": "Rupsi",
      "countryCode": "IN"
    },
    {
      "label": "SAG",
      "city": "Shirdi",
      "countryCode": "IN"
    },
    {
      "label": "SHL",
      "city": "Shillong",
      "countryCode": "IN"
    },
    {
      "label": "SLV",
      "city": "Simla",
      "countryCode": "IN"
    },
    {
      "label": "SSE",
      "city": "Sholapur",
      "countryCode": "IN"
    },
    {
      "label": "STV",
      "city": "Surat",
      "countryCode": "IN"
    },
    {
      "label": "SXR",
      "city": "Srinagar",
      "countryCode": "IN"
    },
    {
      "label": "SXV",
      "city": "Salem",
      "countryCode": "IN"
    },
    {
      "label": "TCR",
      "city": "Tuticorin",
      "countryCode": "IN"
    },
    {
      "label": "TEI",
      "city": "Tezu",
      "countryCode": "IN"
    },
    {
      "label": "TEZ",
      "city": "Tezpur",
      "countryCode": "IN"
    },
    {
      "label": "TIR",
      "city": "Tirupati",
      "countryCode": "IN"
    },
    {
      "label": "TJV",
      "city": "Thanjavur",
      "countryCode": "IN"
    },
    {
      "label": "TNI",
      "city": "Satna",
      "countryCode": "IN"
    },
    {
      "label": "TRV",
      "city": "Trivandrum",
      "countryCode": "IN"
    },
    {
      "label": "TRZ",
      "city": "Tiruchirapally",
      "countryCode": "IN"
    },
    {
      "label": "UDR",
      "city": "Udaipur",
      "countryCode": "IN"
    },
    {
      "label": "VDY",
      "city": "Vidyanagar",
      "countryCode": "IN"
    },
    {
      "label": "VGA",
      "city": "Vijayawada",
      "countryCode": "IN"
    },
    {
      "label": "VIZ",
      "city": "Vizag",
      "countryCode": "IN"
    },
    {
      "label": "VNS",
      "city": "Varanasi",
      "countryCode": "IN"
    },
    {
      "label": "VTZ",
      "city": "Vishakhapatnam",
      "countryCode": "IN"
    },
    {
      "label": "WGC",
      "city": "Warrangal",
      "countryCode": "IN"
    },
    {
      "label": "XXB",
      "city": "Bhadohi",
      "countryCode": "IN"
    },
    {
      "label": "ZER",
      "city": "Zero",
      "countryCode": "IN"
    }
   ];

export default AutoFillInputFlightList;