import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Dialog from "@mui/material/Dialog";
import { Grid } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
// import Nav2 from "./Nav2";
import { Alert } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
// import Typography from '@mui/material/Typography';
import { SnackbarProvider, useSnackbar } from "notistack";
import { MaterialDesignContent } from "notistack";

export default function ButtonAppBar(props) {
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (cartProducts <= 0) {
      console.log("hello");
      enqueueSnackbar("Product List is empty !!",{ variant: 'warning' });

    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { cartProducts, setCartProducts } = props;

  function log_out() {

    navigate("/login");
    localStorage.clear()
  }

  function removeItem(index) {
    debugger;
    setCartProducts(cartProducts.filter((products, i) => i !== index));
    enqueueSnackbar("Product is Removed!",{ variant: 'info' });
  }

  const incNum = (i) => {
    if (cartProducts[i].quantity < 10)
      cartProducts[i].quantity = cartProducts[i].quantity + 1;
    setCartProducts([...cartProducts]);
  };
  let decNum = (i) => {
    if (cartProducts[i].quantity > 0) {
      cartProducts[i].quantity = cartProducts[i].quantity - 1;
      setCartProducts([...cartProducts]);
    }
  };

 
  return (
    <>
      <style>{"body { background-color: white; }"}</style>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar backgroundColor="red">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
              Home
            </Typography>

            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 3, color: "white" }}
            >
              Online Shopping
            </Typography>

            <Button color="inherit" onClick={log_out}>
              Logout
            </Button>
            <Badge badgeContent={cartProducts.length} color="warning">
              <Avatar sx={{ bgcolor: "blue" }}>
                <ShoppingCartIcon onClick={handleClickOpen} />
              </Avatar>
            </Badge>
          </Toolbar>
        </AppBar>
      </Box>

      <Dialog fullScreen open={open}>
        {/* <Tooltip  placement="bottom"
            title={click}> */}
        {/* <Nav2/> */}

        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={1200}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={3}
          marginBottom={4}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          backgroundColor="#BBDEFB "
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          {/* <h3> Product List</h3> */}
          <CloseIcon
            sx={{ marginLeft: 100 }}
            onClick={() => setOpen(false)}
          ></CloseIcon>

          {cartProducts.map((products, index) => (
            <div key={products.n}>
              <Grid container spacing={1} padding={3}>
                <img src={products.img} height="100" width="100" />
                <Typography margin={4}> Rs. {products.price}</Typography>
                <Typography margin={4}> {products.other}</Typography>

                <RemoveCircleIcon
                  sx={{ marginTop: 4 }}
                  onClick={() => decNum(index)}
                >
                  -
                </RemoveCircleIcon>

                <Typography margin={4} marginLeft={2}>
                  {products.quantity}
                </Typography>

                <AddCircleIcon
                  sx={{ marginTop: 4, marginLeft: -2 }}
                  onClick={() => incNum(index)}
                >
                  +
                </AddCircleIcon>
                <Typography margin={4}>
                 Rs.  {products.price * products.quantity}
                </Typography>

                <Button onClick={() => removeItem(index)} varient="contained">
                  REMOVE
                </Button>
              </Grid>
            </div>
          ))}

          <h4>
            <ul>
              Total Price : &nbsp;Rs. &nbsp;
              {cartProducts.reduce(
                (accumulator, product) =>
                  accumulator + product.price * product.quantity,
                0
              )}
            </ul>
          </h4>

          <SnackbarProvider />

          <Button variant="contained" sx={{ marginTop: 4 }}>
            Buy Products
          </Button>
        </Box>
        {/* </Tooltip> */}
      </Dialog>
    </>
  );
}
