import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
// import { signIn } from "../Utility/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, signIn } = useContext(AuthContext);

  //Used to submit and sign in a user
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(username, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  if (user) {
    // If a user is logged in, navigate them to the product page, if they try to access here
    navigate("/");
  }

  //Page used to login by users
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="App" style={{ padding: 10 }}>
          <div>
            <h1 style={{ color: "#CF9FFF" }}>Login</h1>
          </div>
          <div>
            <div style={{ padding: 10 }}>
              <TextField
                id="outlined-basic"
                label="Email"
                placeholder="Email"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div style={{ alignContent: "space-evenly", padding: 10 }}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <text>Forget Password</text>
            </div>

            <div>
              <Button type="submit">Login</Button>
            </div>

            <div>
              <Button>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
