import { useState } from "react";
import { confirmSignUp } from "../Utility/auth";

//Function used to allow user to verify their account
//User must go to email and enter a code here
//When account is verified, they can login
export default function ConfirmSignUp() {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await confirmSignUp(username, code);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  //If code correct, tell user they can login
  if (success) {
    return (
      <div>
        <h2>Confirmation successful!</h2>
        <p>You can now log in with your credentials. Go rock that app!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Confirm Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Confirmation code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Confirm</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
