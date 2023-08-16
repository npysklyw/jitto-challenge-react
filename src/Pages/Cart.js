import { Link } from "react-router-dom";
import ButtonAppBar from "../Components/Appbar";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Button from "@mui/material/Button";
import { UserContext } from "../App";

function Cart() {
  //Function to sum up the item values in the cart
  const sumValues = (items) => {
    console.log(items);
    return items.reduce(function (a, b) {
      return a + b["price"];
    }, 0);
  };

  //Use context to get cart, and cart functions
  const { cart, addCart, removeCart } = React.useContext(UserContext);
  const data = cart;

  //Cart page code
  // Composed of grid from materialUI, displays very basic information about the cart
  //Allows removal of items from the cart with the button
  return (
    <div className="App" style={{ padding: 10 }}>
      <ButtonAppBar />

      <div style={{ marginRight: 30 }}>
        <h1>Cart</h1>
        <Grid container xs={12} spacing={2}>
          <Grid container xs={12} spacing={2} style={{ padding: 20 }}>
            <Grid item xs={4}>
              <h2>Items</h2>
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
                {/* 4 */}
              </Grid>
              <Grid item xs={4}>
                {elem.price}
              </Grid>
            </Grid>
          ))}
          <Grid container xs={12} spacing={2} style={{ padding: 10 }}>
            <Grid item xs={4}>
              <h3>Total Cost:</h3>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <h3>{sumValues(data)}</h3>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Button style={{ backgroundColor: "blue" }}>
        <Link
          to="/checkout"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Checkout
        </Link>
      </Button>
    </div>
  );
}

export default Cart;
