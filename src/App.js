import Cart from "./Pages/Cart";
import { AuthProvider } from "./AuthContext";
import RouteGuard from "./Utility/RouterGuard";
import "./App.css";
import Product from "./Pages/Product";
import Signup from "./Pages/Signup";
import UserProfile from "./Pages/UserProfile";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfirmSignUp from "./Pages/ConfirmSignUp";
import Checkout from "./Pages/Checkout";
import { createContext, useState } from "react";
export const UserContext = createContext({ cart: [] });

// App holds all the various routes here
//The react application knows which each endpoint should render
function App() {
  const [cart, setCart] = useState([]);

  const addCart = (newObject) => {
    setCart(
      // Replace the state
      [
        // with a new array
        ...cart, // that contains all the old items
        newObject, // and one new item at the end
      ]
    );
  };

  const removeCart = (removedObject) => {
    var array = [...cart]; // make a separate copy of the array
    var index = array.indexOf(removedObject);
    console.log(index);
    array.splice(index, 1);
    setCart(array);
    // if (index !== -1) {
    //   array.splice(index, 1);
    //   setCart(array);
    // }

    console.log(cart);
  };
  return (
    <UserContext.Provider value={{ cart, addCart, removeCart }}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Product />} />{" "}
            <Route exact path="/checkout" element={<Checkout />} />{" "}
            <Route exact path="/cart" element={<Cart />} />{" "}
            <Route exact path="/login" element={<Login />} />{" "}
            <Route exact path="/signup" element={<Signup />} />{" "}
            <Route exact path="/confirmsignup" element={<ConfirmSignUp />} />{" "}
            <Route exact path="/profile" element={<UserProfile />} />{" "}
          </Routes>
        </Router>{" "}
      </AuthProvider>
    </UserContext.Provider>
  );
}

export default App;
