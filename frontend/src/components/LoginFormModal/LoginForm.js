import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);



  useEffect(() => {
    const validate = [];
    // if (username.length < 4) validate.push("Username must Be 4 Or More Characters!")
    if (!credential.includes('@')) validate.push('Enter A Valid Email!')
    if (password.length < 6) validate.push('Password Must Be 6 or More Characters!')
    // if (password !== confirmPassword) validate.push('Confirmed Password Must Match Password')

    setErrors(validate)

  }, [credential, password])

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (errors.length === 0) {
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    }
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <h2>Welcome Back</h2>
      <ul>
        {errors.length > 0 && errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>

        <input
          placeholder="Email"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button className="loginSubmit" type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
