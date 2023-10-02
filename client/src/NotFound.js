import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/NotFound.css'

const NotFound = () => {
    const navigate = useNavigate()

    const backToHome = () => {
        navigate("/")
    }
  return (
    <div className='notFound__page'>
        <h1>404 Not Found</h1>
        <button onClick={backToHome}>Back To Home</button>
    </div>
  )
}

export default NotFound