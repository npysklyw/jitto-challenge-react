import { signUp } from "../Utility/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ConfirmSignUp from "./ConfirmSignUp";

//Signup page
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(username, email, password);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (success) {
    return <ConfirmSignUp />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="App" style={{ padding: 10 }}>
          <div>
            <h1 style={{ color: "#CF9FFF" }}>Register a New Account</h1>
          </div>

          <div style={{ padding: 10 }}>
            <TextField
              id="outlined-basic"
              label="Username"
              placeholder="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div style={{ padding: 10 }}>
            <TextField
              id="outlined-basic"
              label="Email"
              placeholder="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <Button type="submit">Sign Up</Button>
          </div>

          <Button>
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
