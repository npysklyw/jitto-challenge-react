import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Button from "@mui/material/Button";
import { UserContext } from "../App";
import ButtonAppBar from "../Components/Appbar";

//Code for the checkout page
//If this were fleshed out, you would include some fields to get credit card/payment info
//I try to duplicate similar code to Cartlist component for this
function Checkout() {
  const sumValues = (items) => {
    return items.reduce(function (a, b) {
      return a + b["price"];
    }, 0);
  };
  const { cart, addCart, removeCart } = React.useContext(UserContext);
  const data = cart;

  return (
    <div className="App" style={{ padding: 10 }}>
      <ButtonAppBar />
      <h1>Checkout</h1>
      <div>
        <Grid container xs={12}>
          <Grid container xs={12} spacing={2} style={{ padding: 20 }}>
            <Grid item xs={4}>
              <h2>Cart Item</h2>
            </Grid>
            <Grid item xs={4}>
              {/* <h2>Quantity</h2> */}
            </Grid>
            <Grid item xs={4}>
              <h2>Price</h2>
            </Grid>
          </Grid>

          {data.map((elem) => (
            <Grid container xs={12} spacing={2} style={{ padding: 20 }}>
              <Grid item xs={4}>
                {elem.name}

                <Button
                  onClick={() =>
                    removeCart({
                      name: elem.name,
                      price: elem.price,
                      imgLink: "",
                      des: elem.des,
                    })
                  }
                >
                  Remove
                </Button>
              </Grid>
              <Grid item xs={4}>
                {/* {data.filter((obj) => obj.name === elem.name).length} */}
              </Grid>
              <Grid item xs={4}>
                {elem.price}
              </Grid>
            </Grid>
          ))}
          <Grid container xs={12} spacing={2} style={{ padding: 20 }}>
            <Grid item xs={4}>
              <h2>Total Cost:</h2>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              {sumValues(data)}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <h2>Payment Information</h2>

      <div>
        <div style={{ alignContent: "space-evenly", padding: 10 }}>
          <TextField
            id="outlined-basic"
            label="Credit card number"
            variant="outlined"
            type="numeric"
          />
        </div>

        <div style={{ alignContent: "space-evenly", padding: 10 }}>
          <TextField
            id="outlined-basic"
            label="Expiration"
            variant="outlined"
            type="numeric"
          />
        </div>

        <div style={{ alignContent: "space-evenly", padding: 10 }}>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            type="name"
          />
        </div>
      </div>

      <Button>Purchase</Button>
    </div>
  );
}

export default Checkout;
