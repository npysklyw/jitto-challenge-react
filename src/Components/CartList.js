import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardContent, Typography, CardHeader } from "@mui/material/";

import OutlinedCard from "./Card";
import ImgMediaCard from "./Card";
import { UserContext } from "../App";
export default function CartList({ updateCart }) {
  const { cart, addCart, removeCart } = React.useContext(UserContext);
  //   const classes = useStyles();
  const data = {
    name: [
      { name: "Apple", price: 10, imgLink: "", des: "A good fruit" },
      { name: "Orange", price: 10, imgLink: "", des: "A good fruit" },
      { name: "Apple", price: 10, imgLink: "", des: "A good fruit" },
      { name: "Apple", price: 10, imgLink: "", des: "A good fruit" },
      { name: "Apple", price: 10, imgLink: "", des: "A good fruit" },
    ],
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.name.map((elem) => (
          <Grid item xs={3} key={data.name.indexOf(elem)}>
            <ImgMediaCard
              namea={elem.name}
              price={elem.price}
              des={elem.des}
              img={elem.imgLink}
              add={updateCart}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
