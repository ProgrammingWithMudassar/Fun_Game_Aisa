import React from 'react'
import { Box, Typography } from '@mui/material'
import FunLogo from '../../Assets/png/FunLogoYellow.png'
import { RxCross2 } from "react-icons/rx";
import { MenuBar } from '../../Components'
import '../styles.css'

const Home = () => {
  return (
    <div className='home-page'>
      <Box sx={{
        width: "100%", bgColor: "red",
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 4 }}>
          <MenuBar />
          <Box>
            <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>ID: 5982528</Typography>
            <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>P ID: 1</Typography>
          </Box>
        </Box>

          <Box sx={{ width: '800px', padding: '10px'}}>
            <img src={FunLogo} alt="Login" style={{ width: '100%',  objectFit: 'contain' }} />
        </Box>
        <Box>
          <button className='close'><RxCross2 size={25} /></button>
        </Box>
      </Box>
    </div>
  )
}

export default Home