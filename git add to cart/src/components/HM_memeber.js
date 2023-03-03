import {
  Avatar,
  BottomNavigation,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Login from "./Login";

import React from "react";
import Home from "./Home";

export default function HM_memeber() {
  const email = useRef();
  const password = useRef();

  const [login,setlogin]=useState(false)
  const [show,setshow]=useState(false)

     const localsignup=localStorage.getItem('signup')
     const localemail=localStorage.getItem('email')
     const localpass=localStorage.getItem('pass')
    
     useEffect(()=>{
      if(localsignup){
        setlogin(true)
      }
      if(localemail){
        setshow(true)
      }
     })
  const handeClick = () => {
    // debugger;
    console.log(email.current.value, password.current.value);
      localStorage.setItem('email',email.current.value)
      localStorage.setItem('pass',password.current.value)
      localStorage.setItem('signup',email.current.value)
     
     
      window.location.reload()
  };
     
  return (
    <>
    <div>
      {login?<Login title1={localemail} title2={localpass}/>:
     

      <Box
        display="flex"
        flexDirection={"column"}
        // maxWidth={400}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={7}
        padding={5}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        backgroundColor="white"
        sx={{
          // ":hover": {
          //   boxShadow: "10px 10px 20px #ccc",
            height:'70%',
          }
        }
      // }
      >
        <Typography variant="h5" padding={3} textAlign="center" color="black">
          Create an Account
        </Typography>
        <TextField
          // type={"email"}
          variant="standard"
          placeholder="Enter Full Name"
          margin="normal"
          required
        ></TextField>

        <TextField
          variant="standard"
          placeholder="Enter email"
          margin="normal"
          required
          inputRef={email}/>
        <TextField
          variant="standard"
          placeholder="Enter Password"
          margin="normal"
          required
          inputRef={password}/>

        <Button
          variant="contained"
          color="warning"
          sx={{ marginTop: 3, borderRadius: 3 }}
          onClick={handeClick}
        >
          Sign Up
        </Button>

        <Button color="primary" sx={{ marginTop: 3, borderRadius: 3 }}>
         <NavLink to='/login'>Click here to log in</NavLink>
        </Button>
      </Box>
      
}
    </div>
    </>
  );
}
