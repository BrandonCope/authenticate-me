import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './SignupFormPage.css'

function SignUpForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const validate = [];
    if (username.length < 4) validate.push("Username must Be 4 Or More Characters!")
    if (!email.includes('@')) validate.push('Enter A Valid Email!')
    if (password.length < 6) validate.push('Password Must Be 6 or More Characters!')
    if (password !== confirmPassword) validate.push('Confirmed Password Must Match Password')

    setErrors(validate)

  }, [username, email, password, confirmPassword])



  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length === 0 && password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(errors);
  };

  return (
    <form className="signUpForm" onSubmit={handleSubmit}>
      <h2>Create an account.</h2>
      <ul>
        {errors.length > 0 && errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>

        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <label>

        <input
        placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button className="signUpSubmit" type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
