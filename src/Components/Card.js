import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { UserContext } from "../App";

export default function ImgMediaCard({ namea, des, img, price }) {
  const { cart, addCart, removeCart } = useContext(UserContext);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {namea}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {des}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() =>
            addCart({ name: namea, price: price, imgLink: "", des: des })
          }
        >
          Add to cart
        </Button>

        <text>{price}</text>
      </CardActions>
    </Card>
  );
}
