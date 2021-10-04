import { useRef } from "react";
import {
  TextField,
  Box,
  CssBaseline,
  Button,
  Typography,
  Divider,
  Alert
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetch_data } from "./redux/actions/actions";
import {
  LineChart,
  YAxis,
  XAxis,
  CartesianGrid,
  Line,
  AreaChart,
  Tooltip,
  Area
} from "recharts";

function App() {
  const dispatch = useDispatch();
  const inpRef = useRef(null);
  const fetched_data = useSelector((state) => state.ui.data);
  //handle search btn click
  const handleSearch = (event) => {
    // we will get our input value to get country code -- later --
    console.log("country code :", inpRef.current.value);
    dispatch(
      fetch_data({
        country_code: inpRef.current.value != "" ? inpRef.current.value : "dz"
      })
    );
  };

  return (
    <>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        justifyConten="center"
        alignItems="center"
        sx={{ width: "100%", pt: 2 }}
      >
        {/* replace with message component */}
        {/* <Typography variant="h4">Welcome to COVID-19 TRACKER</Typography> */}
        <Alert severity="info">Welcome to COVID-19 TRACKER</Alert>
        <Divider flexItem orientation="horizontal" sx={{ mb: 2, mt: 1 }} />
        <TextField
          placeholder="search"
          size="small"
          inputRef={inpRef}
          sx={{
            width: "80%",
            margin: "auto",
            "& .MuiOutlinedInput-input": {
              textAlign: "center"
            }
          }}
        />
        <Button
          variant="outlined"
          color="info"
          size="small"
          sx={{ mt: 2, width: "50%" }}
          onClick={(event) => handleSearch(event)}
        >
          Search
        </Button>
        <Box sx={{ mt: 2, width: "100%" }}>
          <LineChart width={1500} height={250} data={fetched_data}>
            <Line type="monotone" dataKey="Deaths" stroke="red" />
            <Line type="monotone" dataKey="Confirmed" stroke="orange" />
            <Line type="monotone" dataKey="Recovered" stroke="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="Date" />
            <YAxis />
          </LineChart>

          <AreaChart
            width={1500}
            height={250}
            data={fetched_data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="deaths" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="confirmed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="recovered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#de6262" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffb88c" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="Date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Deaths"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#deaths)"
            />
            <Area
              type="monotone"
              dataKey="Confirmed"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#confirmed)"
            />
            <Area
              type="monotone"
              dataKey="Recovered"
              stroke="#de6262"
              fillOpacity={1}
              fill="url(#recovered)"
            />
          </AreaChart>
        </Box>
      </Box>
    </>
  );
}

export default App;
