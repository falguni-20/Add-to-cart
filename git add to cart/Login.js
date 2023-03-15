import {
  Avatar,
  BottomNavigation,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
// import { Navigate,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SnackbarProvider, useSnackbar } from "notistack";


import React, { useRef, useState } from "react";
import {
  //  NavLink,
  useNavigate,
} from "react-router-dom";

// import Home from "./Home";
import Homepage from "./Homepage";
// import HM_memeber from "./HM_memeber";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const getemail = localStorage.getItem("email");
  const getpass = localStorage.getItem("pass")

  const onSubmit = (data) => {
    const curr_email = data.email;
    const curr_pass = data.password;
    if (getemail === curr_email && getpass === curr_pass) {
     
      navigate("/homepage");
      
    } else {
      enqueueSnackbar("Incorrect information !!",{ variant: 'error' });
     
    }
  }; 
  const navigate = useNavigate();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            Log In 
          </Typography>

          <TextField
            variant="standard"
            placeholder="Enter email"
            margin="normal"
            required
            {...register("email")}
          ></TextField>
          <TextField
            variant="standard"
            placeholder="Enter Password"
            margin="normal"
            required
            {...register("password")}
          ></TextField>

          <Button
            type="submit"
            variant="contained"
            color="warning"
            
            sx={{ marginTop: 4, borderRadius: 3 }}
          >
            login
          </Button>
        

<Button color="primary" sx={{ marginTop: 3, borderRadius: 3 }} onClick={()=>{
                  // console.log("hello");
                  navigate("/");
              }}>click here to Signup</Button>
        
        </Box>
      </form>
    </div>
  );
}
