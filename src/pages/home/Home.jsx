import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import FunLogo from '../../Assets/png/FunLogoYellow.png'
import { RxCross2 } from "react-icons/rx";
import { MenuBar } from '../../Components';
import Chip1 from '../../Assets/png/chips1.png'
import BackgroundBlackLine from '../../Assets/somenew/BackgronnfBlackLine.png'
import userIcon from '../../Assets/somenew/userIcon.png'
import timerBackground from '../../Assets/png/timerBackground.png'
import NumberBackground from '../../Assets/somenew/NumberBackground.png'
import '../styles.css'

const generateDataArray = (length) => {
  return Array.from({ length }, (_, index) => ({
    multiplier: '1x',
    value: Math.floor(Math.random() * 10), // Random value between 0 and 99
  }));
};


const Home = () => {
  const dataArray = generateDataArray(10);


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

        <Box sx={{ width: '800px', padding: '10px' }}>
          <img src={FunLogo} alt="Login" style={{ width: '100%', objectFit: 'contain' }} />
        </Box>
        <Box>
          <button className='close'><RxCross2 size={25} /></button>
        </Box>
      </Box>


      {/* chips  */}
      <Grid container spacing={0}>
        <Grid xs={4} item>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: "column", gap: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
              <img src={Chip1} alt="" className='Chip' />
              <img src={Chip1} alt="" className='Chip' />
              <img src={Chip1} alt="" className='Chip' />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
              <img src={Chip1} alt="" className='Chip' />
              <img src={Chip1} alt="" className='Chip' />
              <img src={Chip1} alt="" className='Chip' />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
              <img src={Chip1} alt="" className='Chip' />
              <img src={Chip1} alt="" className='Chip' />
              <img src={Chip1} alt="" className='Chip' />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 4, mt: 8 }}>
            <Box sx={{ background: "#690000", minWidth: "140px", p: 0.5, textAlign: "center" }}>
              <Typography variant="h5" color="#fff" sx={{ p: 0.8 }}>9810</Typography>
              <Typography variant="h6" color="#fff" sx={{width:"100%", p: 0.8, background: "#200000" }}>BALANCE</Typography>
            </Box>
            <Box sx={{ background: "#690000", minWidth: "140px", p: 0.5, textAlign: "center" }}>
              <Typography variant="h5" color="#fff" sx={{ p: 0.8 }}>9810</Typography>
              <Typography variant="h6" color="#fff" sx={{width:"100%", p: 0.8, background: "#200000" }}>TOTAL BET</Typography>
            </Box>
            <Box sx={{ background: "#690000", minWidth: "140px", p: 0.5, textAlign: "center" }}>
              <Typography variant="h5" color="#fff" sx={{ p: 0.8 }}>9810</Typography>
              <Typography variant="h6" color="#fff" sx={{width:"100%", p: 0.8, background: "#200000" }}>WINING</Typography>
            </Box>
          </Box>
        </Grid>




        {/* spinner  */}
        <Grid xs={4} item></Grid>


        {/* timer  */}
        <Grid item xs={4} sx={{}}>
          <Box sx={{ width: "400px", display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 4, position: "relative" }}>
            <img src={BackgroundBlackLine} alt='' style={{ width: "80%", height: '50px' }} />
            <img src={userIcon} alt='' style={{ width: "40px", position: "absolute", top: "8px", left: "23%" }} />
            <Typography variant="body1" color="initial" sx={{ width: "40px", position: "absolute", top: "6px", left: "36%", color: "#fff", fontSize: "26px" }}>FUN002010009</Typography>
          </Box>
          <Box sx={{ width: "100%", display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 4, position: "relative" }}>
            <img src={timerBackground} alt='' style={{ width: "140px" }} />
          </Box>
          <Box sx={{ width: "90%", border: "4px solid #a08301", borderRadius: '10px', py: 2, px: 4, textAlign: "center", m: 'auto' }}>
            <Typography variant="h6" color="#fff">For Amusement Only. Your Minimum Bet 10 and the maximum Bet 50000</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            {dataArray.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'red',
                }}
              >
                <Typography variant="h6" sx={{ width: "40px", textAlign: 'center', color: 'white', border: '1px solid #fff', fontWeight: 600 }}>{item.value}</Typography>
                <Typography variant="h6" sx={{ width: "40px", textAlign: 'center', color: 'white', border: '1px solid #fff', fontWeight: 600 }}>{item.multiplier}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 2 }}>
            <Button className='btn-bakground' sx={{ width: '100%', color: "#fff", fontSize: "20px", fontWeight: 600, borderRadius: "10px", backgroundImage: "linear-gradient(#d01b1b, #FF0000, #d01b1b)" }}>PREV</Button>
            <Button className='btn-bakground' sx={{ width: '100%', color: "#fff", fontSize: "20px", fontWeight: 600, borderRadius: "10px", backgroundImage: "linear-gradient(#d01b1b, #FF0000, #d01b1b)" }}>CLEAR</Button>
            <Button className='btn-bakground' sx={{ width: '100%', color: "#fff", fontSize: "20px", fontWeight: 600, borderRadius: "10px", backgroundImage: "linear-gradient(#d01b1b, #FF0000, #d01b1b)" }}>Dolble    </Button>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 4, mt: 4 }}>
        <Box sx={{ position: "relative" }}>
          <img src={NumberBackground} alt="" className='Chips' />
          <Typography variant="h6" color="initial" sx={{ fontSize: '30px', fontWeight: 600, position: 'absolute', top: '0px', left: '42%' }}>1</Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={NumberBackground} alt="" className='Chips' />
          <Typography variant="h6" color="initial" sx={{ fontSize: '30px', fontWeight: 600, position: 'absolute', top: '0px', left: '42%' }}>2</Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={NumberBackground} alt="" className='Chips' />
          <Typography variant="h6" color="initial" sx={{ fontSize: '30px', fontWeight: 600, position: 'absolute', top: '0px', left: '42%' }}>3</Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={NumberBackground} alt="" className='Chips' />
          <Typography variant="h6" color="initial" sx={{ fontSize: '30px', fontWeight: 600, position: 'absolute', top: '0px', left: '42%' }}>4</Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={NumberBackground} alt="" className='Chips' />
          <Typography variant="h6" color="initial" sx={{ fontSize: '30px', fontWeight: 600, position: 'absolute', top: '0px', left: '42%' }}>5</Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={NumberBackground} alt="" className='Chips' />
          <Typography variant="h6" color="initial" sx={{ fontSize: '30px', fontWeight: 600, position: 'absolute', top: '0px', left: '42%' }}>6</Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={NumberBackground} alt="" className='Chips' />
          <Typography variant="h6" color="initial" sx={{ fontSize: '30px', fontWeight: 600, position: 'absolute', top: '0px', left: '42%' }}>7</Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={NumberBackground} alt="" className='Chips' />
          <Typography variant="h6" color="initial" sx={{ fontSize: '30px', fontWeight: 600, position: 'absolute', top: '0px', left: '42%' }}>8</Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={NumberBackground} alt="" className='Chips' />
          <Typography variant="h6" color="initial" sx={{ fontSize: '30px', fontWeight: 600, position: 'absolute', top: '0px', left: '42%' }}>9</Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={NumberBackground} alt="" className='Chips' />
          <Typography variant="h6" color="initial" sx={{ fontSize: '30px', fontWeight: 600, position: 'absolute', top: '0px', left: '42%' }}>0</Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Home