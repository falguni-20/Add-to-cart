import React, { useState } from "react";
import {
  Button,
  Box,
  Grid,
  Typography,
  Item,
  Avatar,
  Tooltip,
} from "@mui/material";
import {Alert} from "@mui/material";
import {Stack} from "@mui/material";
// import Avatar from '@mui/material';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import {Grid} from '@mui/material';
import ReactTooltip from "react-tooltip";
// import adding from "./adding";
import Navb from "./Navb";
// import AlertTitle from "@mui/material";
import {BottomNavigation} from "@mui/material";
import { SnackbarProvider, useSnackbar } from "notistack";

export default function Homepage() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const productArray = [
    {
      n: 1,
      img: require("C:/Users/asus/Desktop/fd/firstfolder/src/components/imgs/m2.jpg"),
      // img2:require("C:/Users/asus/Desktop/fd/firstfolder/src/components/images/img1.jfif"),
      price: 2000,
      other: "Regular blue jacket",
      quantity: 1,
    },
    {
      n: 2,
      img: require("C:/Users/asus/Desktop/fd/firstfolder/src/components/imgs/m3.jpg"),
      // img2:require("C:/Users/asus/Desktop/fd/firstfolder/src/components/images/img13.jfif"),
      price: 3000,
      other: "Regular fit jacket ",
      quantity: 1,
    },
    {
      n: 3,
      img: require("C:/Users/asus/Desktop/fd/firstfolder/src/components/imgs/m7.jpg"),
      // img2:require("C:/Users/asus/Desktop/fd/firstfolder/src/components/images/img13.jfif"),
      price: 1800,
      other: "puffer jacket white",
      quantity: 1,
    },
    {
      n: 4,
      img: require("C:/Users/asus/Desktop/fd/firstfolder/src/components/imgs/m9.jpg"),
      // img2:require("C:/Users/asus/Desktop/fd/firstfolder/src/components/images/img13.jfif"),
      price: 1800,
      other: "puffer jacket white",
      quantity: 1,
    },
    {
      n: 5,
      img: require("C:/Users/asus/Desktop/fd/firstfolder/src/components/imgs/m11.jpg"),
      // img2:require("C:/Users/asus/Desktop/fd/firstfolder/src/components/images/img13.jfif"),
      price: 1800,
      other: "puffer jacket white",
      quantity: 1,
    },
    {
      n: 6,
      img: require("C:/Users/asus/Desktop/fd/firstfolder/src/components/imgs/m6.jpg"),
      // img2:require("C:/Users/asus/Desktop/fd/firstfolder/src/components/images/img13.jfif"),
      price: 1800,
      other: "puffer jacket white",
      quantity: 1,
    },
  ];

  const [cartProducts, setCartProducts] = useState([]);

  const arrdata = productArray.map((product) => (
    <Grid item xs={12} md={4} lg={3} key={product.n}>
      <Box
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        marginLeft={14}
        padding={1}
        // border={2}
        sx={{ backgroundColor: "white" }}
      >
        <img src={product.img} height="350" width="280" />
        <Typography textAlign={"center"} marginTop={2} color="black">Rs. {product.price}</Typography>
        <Typography textAlign={"center"} color="black">{product.other}</Typography>
        <Avatar
          sx={{
            bgcolor: "white",
            color: "blue",
            marginLeft: 26,
            marginTop: -4,
          }}
          data-tip
          data-for="registerTip"
        >
          <Tooltip
            placement="top"
            title="add to cart"
            onClick={(event) => {

             const existingProductIndex = cartProducts.findIndex((currentproduct) => currentproduct.n == product.n);
              if(existingProductIndex > -1){
                cartProducts[existingProductIndex].quantity = cartProducts[existingProductIndex].quantity+=1
                enqueueSnackbar("Product is added !!",{ variant: 'success' });
             
              }else{
               
                setCartProducts((prevProduct) => [...prevProduct, product]);
                enqueueSnackbar("Product is added !!",{ variant: 'success' });
             
              }
            }}
          >
            <AddShoppingCartIcon />
          </Tooltip>
        </Avatar>
      </Box>
    </Grid>
  ));

  return (
    <>
      <Navb cartProducts={cartProducts} setCartProducts={setCartProducts}/>
     
      <Box
        component="img"
        sx={{
          height: 400,
          width: 1000,
          marginTop:-4,
          // marginTop:40,
          marginLeft:-50,
          // marginLeft:10,
          margin:"auto",
          paddingTop:8,
         
        }}
       
       
        src={require("C:/Users/asus/Desktop/fd/firstfolder/src/components/imgs/template3.jpg")}
      >

</Box>
      <Grid container spacing={1}>
        {arrdata}
      </Grid>

      
      
      {/* <button onClick={() => enqueueSnackbar('That was easy!')}>Show snackbar</button> */}
   
    </>
  );


}
