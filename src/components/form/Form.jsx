import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {BsFillTelephoneFill} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";

const Form = () => {
  return (
    <form className=" w-[20rem] rounded h-[22rem] items-center ">
      <Typography variant="h4" component="h3" className="text-[#1976D2]">
        New Contact
      </Typography>

      <AiOutlineUser className="absolute ml-1 mt-[35px]" />
      <TextField
        fullWidth
        id="margin-none"
        margin="normal"
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        required
      />
      <BsFillTelephoneFill className="absolute ml-1 mt-[35px]" />
      <TextField
        fullWidth
        id="margin-dense"
        margin="normal"
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        required
        type="tel"
      />

      <Box sx={{minWidth: 120, marginTop: "1rem"}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
      <Button className="w-[150px]" variant="contained" type="submit">
        ADD
      </Button>
    </form>
  );
};

export default Form;
