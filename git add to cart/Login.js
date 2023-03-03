import {
  Avatar,
  BottomNavigation,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Navigate } from "react-router-dom";


import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Home from "./Home";
import Homepage from "./Homepage";


export default function Login(props) {
  const email2 = useRef();
  const password2 = useRef();

  const getemail = props.title1;
  const getpass = props.title1;

  // const navi=useNavigate()
  const navigate = useNavigate();
  
  const handeClick2 = () => {
    debugger;
    // console.log(email2.current.value, password2.current.value);
    const loginemail = email2.current.value;
    const loginpass = password2.current.value;
    const flag = 0;
    if (getemail == loginemail && getpass == loginpass){
    
      navigate("/homepage");
      
    }
    
  };



  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={7}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          backgroundColor="white"
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h4" padding={3} textAlign="center" color="black">
            Log in
          </Typography>

          <TextField
            // type={"email"}
            variant="standard"
            placeholder="Enter email"
            margin="normal"
            required
            inputRef={email2}
          ></TextField>
          <TextField
            // type={"Password"}
            variant="standard"
            placeholder="Enter Password"
            margin="normal"
            required
            inputRef={password2}
          ></TextField>

          <Button
            type="submit"
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 3 }}
            onClick={handeClick2}
          >
           login
          </Button>
          <Button color="primary" sx={{ marginTop: 3, borderRadius: 3 }} >
            Click here to Sign up
          </Button>
        </Box>
      </form>
    </div>
  );
}
