import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/logo.png';
import './AuthForm.css'

const Register = () => {
    const [input, setInput] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    //make sure the input has name like name="email"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if(!input.username || !input.email || !input.password) {
        setError("Error! All inputs required");
        return;
      }
  
      if(input.password.length < 5) {
        setError("Weak password. Need at least 5 characters")
        return;
      }

      const response = await fetch("http://localhost:5000/auth/register",{
        method: "POST",
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if(!response.ok){
        setError(data.message);
        return;
      }
      navigate("/login")
    } catch (error) {
      setError(error.response.data);
    }

  };

  return (
    <div className="auth__page">
      <div className='form'>
        <div className='form__header'>
            <Link to="/" alt="logo" className='form__logo'>
              <img src={logo} />
              <h3>GetFit</h3>
            </Link>
          <div className='form__title'>
            <h2>Register</h2>
            <p>Begin your journey with us</p>
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
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
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
        <button onClick={handleSubmit} className="form__btn" type="submit">
          Register
        </button>
        {error && <p className="form__error-message">{error}</p>}
        </form>
        <div className="form__footer">
          Ready to start? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register