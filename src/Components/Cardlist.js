import React from "react";
import { Grid } from "@mui/material/";
import ImgMediaCard from "./Card";

export default function Cardlist() {
  const data = {
    name: [
      {
        name: "Apricot",
        price: 1,
        imgLink: "./img/apr.jpeg",
        des: "The apricot is a popular fruit with a light orange color and it is best known for its vitamin A and C content.",
      },
      {
        name: "Avocado",
        price: 2,
        imgLink: "./img/avo.jpeg",
        des: "Avocados are an interesting fruit because they are very low in carbohydrate yet high in healthy fats.",
      },
      {
        name: "Banana",
        price: 1,
        imgLink: "./img/ban.jpeg",
        des: "The banana is a tropical fruit with a long body covered in a yellow skin.",
      },
      {
        name: "Blackberry",
        price: 10,
        imgLink: "./img/bb.jpeg",
        des: "They are a small edible fruit with a big taste, and botanically they are a kind of berry that grow on brambles. The fruit has a sweet and succulent taste despite being relatively low in fructose compared to most types of fruit.",
      },
      {
        name: "Apple",
        price: 1,
        imgLink: "./img/apr.jpeg",
        des: "Believed to originate in Central Asia, there are now hundreds of varieties of apples, ranging from sweet to sour.",
      },
    ],
  };
  return (
    <div>
      <Grid container alignItems="stretch" spacing={2} direction="row">
        {data.name.map((elem) => (
          <Grid
            item
            xs={3}
            style={{ display: "flex" }}
            key={data.name.indexOf(elem)}
          >
            <ImgMediaCard
              style={{ display: "flex" }}
              namea={elem.name}
              price={elem.price}
              des={elem.des}
              img={elem.imgLink}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
