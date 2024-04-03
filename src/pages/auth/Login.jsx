import React from 'react'
import LoginHomepage from '../../Assets/gif/LoginHomepage.gif'
import { Box, Typography } from "@mui/material"
import { LoginCard } from '../../Components'
import { RxCross2 } from "react-icons/rx";
import '../styles.css'

const Login = () => {
  return (
    <Box className="login-page">
      <Box><LoginCard /></Box>
      <Box>
        <Box sx={{ width: '600px', height: '500px', padding:'10px', mt:12 }}>
          <img src={LoginHomepage} alt="Login" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Box>
      </Box>
      <button className='close'><RxCross2 /></button>
    </Box>
  )
}

export default Login