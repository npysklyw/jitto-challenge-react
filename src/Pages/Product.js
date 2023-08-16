import Cardlist from "../Components/Cardlist";
import ButtonAppBar from "../Components/Appbar";

//Product page
//Displays the appbar component at the top
//Shows items below from, cardlist
function Product() {
  return (
    <div className="App" style={{ padding: 10 }}>
      <div style={{ padding: 10 }}>
        <ButtonAppBar />
      </div>

      <div style={{ padding: 20 }}>
        <Cardlist></Cardlist>
      </div>
    </div>
  );
}

export default Product;
