import React, { useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [trueUser, setTrueUser] = useState(false);
  const [flag,setFlag] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    setFlag(true);
    e.preventDefault();
    if (data.username === "user" && data.password === "password") {
      setTrueUser(true);
    } else {
      setTrueUser(false);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {!trueUser && flag && (<p>Invalid username or password</p>)}
      {trueUser ? (
        <p>Welcome, {data.username}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
