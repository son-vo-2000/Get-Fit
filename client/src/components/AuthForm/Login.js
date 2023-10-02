import React,{useState,useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../authContextApi/AuthContext';
import logo from '../../images/logo.png';
import './AuthForm.css'

const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const {login} = useContext(AuthContext);
  const naviagte = useNavigate();

  const handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!input.username || !input.password) {
        setError("Error! All inputs are required");
        return;
      }
      if (input.password.length < 5) {
        setError("Error! Incorrect Password");
        return;
      }

      const response = await login(input);
      if(!response){
        setError("Can't find user");
        return
      }
      naviagte("/main")
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className='auth__page'>
      <div className="form">
        <div className='form__header'>
          <Link to="/" alt="logo" className='form__logo'>
            <img src={logo} />
            <h3>GetFit</h3>
          </Link>

        <div className='form__title'>
          <h2>Log in</h2>
          <p>Continue your journey with us</p>
        </div>
      </div>
      <form id="form__body">
        <div className="input_wrapper">
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            id="username"
            name="username"
            onChange={handleInputChange}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        {error && <p className="form__error-message">{error}</p>}
        
        <button className="form__btn" type="submit" onClick={handleLoginSubmit}>
          Log in
        </button>
      </form>
      <div className="form__footer">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </div>
  </div>
  )
}

export default Login