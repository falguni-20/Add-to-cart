import {
  Avatar,
  BottomNavigation,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link, NavLink,useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Login from "./Login";

import React from "react";
import Home from "./Home";
import { useForm } from "react-hook-form";
import { SnackbarProvider, useSnackbar } from "notistack";


export default function HM_memeber() {
  

  const { register, handleSubmit } = useForm();
  // const [login, setlogin] = useState(false);
  // const [show, setshow] = useState(false);

  const localsignup = localStorage.getItem("signup");
  const localemail = localStorage.getItem("email");
  const localpass = localStorage.getItem("pass");

  // useEffect(() => {
  //   if (localsignup) {
  //     setlogin(true);
  //   }
  //   if (localemail) {
  //     setshow(true);
  //   }
  // });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
 
  const onSubmit = (data) => {
    localStorage.setItem("email", data.email);
    localStorage.setItem("pass", data.password);
    // localStorage.setItem("signup", data.email);
    // window.location.reload();
    navigate("/login")
    enqueueSnackbar(" Successfully Saved !!",{ variant: 'success' });

  };
  const navigate = useNavigate();
  return (
    <>
      <div>
        {/* {login ? (
          <Login title1={localemail} title2={localpass} />
        ) : ( */}
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
                  height: "70%",
                },
              }}
            >
              <Typography
                variant="h5"
                padding={3}
                textAlign="center"
                color="black"
              >
                Create an Account
              </Typography>

              <TextField
                variant="standard"
                placeholder="Enter Name"
                margin="normal"
                required
              />
              <TextField
                variant="standard"
                placeholder="Enter email"
                margin="normal"
                required
                {...register("email")}
              />

              <TextField
                variant="standard"
                placeholder="Enter Password"
                margin="normal"
                required
                {...register("password")}
              />

              <Button
                variant="contained"
                color="warning"
                sx={{ marginTop: 2, borderRadius: 3 }}
                type="submit"
                {...register("signup")}
              >
                Sign Up
              </Button>

              <Button color="primary" sx={{ marginTop: 3, borderRadius: 3 }} onClick={()=>{
                  // console.log("hello");
                  navigate("/");
              }}>
               
                {/* <NavLink to="/login">Click here to log in</NavLink> */}
               

              </Button>
              <Button color="primary" sx={{ marginTop: 1, borderRadius: 3 }} onClick={()=>{
                
                  navigate("login/");
              }}>click here to login</Button>
            </Box>
          </form>
        {/* )} */}
      </div>
    </>
  );
}
