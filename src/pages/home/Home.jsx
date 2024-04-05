import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import FunLogo from '../../Assets/png/FunLogoYellow.png'
import { RxCross2 } from "react-icons/rx";
import { MenuBar } from '../../Components';
import Chip1 from '../../Assets/png/chips1.png'
import Chip2 from '../../Assets/png/chips2.png'
import Chip3 from '../../Assets/png/chips3.png'
import Chip4 from '../../Assets/png/chips4.png'
import Chip5 from '../../Assets/png/chips5.png'
import Chip6 from '../../Assets/png/chips6.png'
import Chip7 from '../../Assets/png/chips7.png'
import Chip8 from '../../Assets/png/chips8.png'
import Chip9 from '../../Assets/png/chips9.png'
import BackgroundBlackLine from '../../Assets/somenew/BackgronnfBlackLine.png'
import userIcon from '../../Assets/somenew/userIcon.png'
import timerBackground from '../../Assets/png/timerBackground.png'
import NumberBackground from '../../Assets/somenew/NumberBackground.png'
import siteLogoName from '../../Assets/site__logo.png';
import SiteLogo from '../../Assets/site__Logo2.png';
import CloseIcon from '../../Assets/close_Icon.png';
import wheelGif from '../../Assets/Final-Wheel.gif';
import wheelCenter from '../../Assets/wheel_center_part.png';
import loadingGameGif from '../../Assets/loadingLogo.png';
import $ from 'jquery'
import { Link } from 'react-router-dom'
import '../styles.css'

const generateDataArray = (length) => {
  return Array.from({ length }, (_, index) => ({
    multiplier: '1x',
    value: Math.floor(Math.random() * 10), // Random value between 0 and 99
  }));
};


const Home = () => {
  const dataArray = generateDataArray(10);
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.complete_page').hide();
    $('.error_page').show();
  }

  let nextWinner = 9;
  const userId = 534789;
  let timerSeconds = 30;
  if (nextWinner > 9) {
    nextWinner = 9;
  }
  if (timerSeconds < 1) {
    timerSeconds = 1;
  }
  let totalMintues = parseInt(Math.floor(timerSeconds / 60));
  let totalSeconds = timerSeconds % 60;
  if (totalSeconds < 10) {
    totalSeconds = "0" + totalSeconds;
  }
  if (totalMintues < 10) {
    totalMintues = "0" + totalMintues;
  }
  if (nextWinner < 0 || nextWinner > 9) {
    nextWinner = 9;
  }
  const [pageDataVisible, setPageDataVisible] = useState({ 'visibility': "hidden", "opacity": "0" });
  const [loadingScreenVisible, setLoadingScreenVisible] = useState({ 'visibility': "visible", "opacity": "1" });
  const [winner, setWinner] = useState(-1);
  const [winnerList, setWinnerList] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6]);
  const [spinnerCounter, setSpinnerCounter] = useState(1);

  useEffect(() => {
    $('.container').fadeOut(200);
    $(".container").css("transition", "0s all ease-in-out");
    $(".container").css("transform", "rotate(" + 0 + "deg)");
    $('.container').fadeIn(200);

  }, [nextWinner])

  function spinWheel() {
    let rotationDegree = 0;
    let nextRotation = 360 - (nextWinner * 36);
    const divStyles = $('.container')[0].style.cssText;
    const matches = divStyles.match(/rotate\(([-]?\d+\.?\d*)deg\)/);
    const rotationAngle = matches ? parseFloat(matches[1]) : 0;

    if (rotationAngle == 0) {
      if (nextRotation == 0) {
        rotationDegree = 1080;
      }
      else {
        rotationDegree = 1080 + nextRotation;
      }
    }
    if (nextRotation == (rotationAngle % 360)) {
      rotationDegree = rotationAngle + 1080;
    }
    $(".container").css("transition", "4.5s all ease-in-out");
    $(".container").css("transform", "rotate(" + rotationDegree + "deg)");

    let mywinner = nextWinner;
    if (mywinner != 0) {
      mywinner = mywinner;
    }
    setTimeout(() => {
      setWinner(mywinner);
      setSpinnerCounter((prev) => prev + 1);
    }, 5000);
  }
  useEffect(() => {
    if (winner >= 0) {
      let currentWinnerList = winnerList.slice(0, winnerList.length - 1);
      currentWinnerList.unshift(winner);
      setWinnerList(currentWinnerList);
    }
  }, [spinnerCounter])

  useEffect(() => {
    // Start with the loader full width, indicating loading state
    $('.loader>span').css('width', "100%");

    // After 5.5 seconds, perform the following actions
    const pageLoadTimeout = setTimeout(() => {
      setPageDataVisible({ 'visibility': "visible", "opacity": "1" });
      setLoadingScreenVisible({ 'visibility': "hidden", "opacity": "0" });
      countdown();
    }, 5500);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(pageLoadTimeout);
  }, []);

  useEffect(() => {
    // After 30 seconds, spin the wheel
    const spinTimeout = setTimeout(() => {
      spinWheel();
    }, 30000); // Set timeout for 30 seconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(spinTimeout);
  }, []);



  $(document).ready(function () {
    $('body').on("contextmenu", function () {
      return false;
    });
    $('body').on("cut", function (e) {
      e.preventDefault();
    });
    $('body').on("copy", function (e) {
      e.preventDefault();
    });
    $('body').on("paste", function (e) {
      e.preventDefault();
    });
  });

  $(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
      return false;
    }
  });

  var interval;

  function countdown() {
    clearInterval(interval);
    interval = setInterval(function () {
      var timer = $('.js-timeout').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      if (minutes == 0 && seconds == 0) {
        minutes = totalMintues;
        seconds = totalSeconds;
        spinWheel();
      }
      else {
        seconds -= 1;
      }
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
        minutes -= 1;
        seconds = 59;
      }
      else if (seconds < 10 && seconds.length != 2) seconds = '0' + seconds;


      if ((minutes.toString()).length < 2 && minutes < 10) {
        minutes = "0" + minutes;
      }
      $('.js-timeout').html(minutes + ':' + seconds);


    }, 1000);
  }



  return (
    <div className='home-page'>
      <Grid container spacing={0} sx={{ py: 1, px: 4, width: "100%", }}>
        <Grid xs={3}  item>
          <MenuBar />
          <Box sx={{ ml: 8, mt: 2 }}>
            <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600, fontSize: "20px" }}>ID: 5982528</Typography>
            <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600, fontSize: "20px" }}>P ID: 1</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={FunLogo} alt="Login" style={{ width: '80%', objectFit: 'contain' }} />
        </Grid>
        <Grid item xs={3} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Link to="/login">
            <button className='close'><RxCross2 size={25} /></button>
          </Link>
        </Grid>
      </Grid>


      {/* chips  */}
      <Grid container spacing={0} sx={{ px: 4 }}>
        <Grid xs={4} item>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
              <img src={Chip1} alt="" className='Chip' />
              <img src={Chip2} alt="" className='Chip' />
              <img src={Chip3} alt="" className='Chip' />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
              <img src={Chip4} alt="" className='Chip' />
              <img src={Chip5} alt="" className='Chip' />
              <img src={Chip6} alt="" className='Chip' />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
              <img src={Chip7} alt="" className='Chip' />
              <img src={Chip8} alt="" className='Chip' />
              <img src={Chip9} alt="" className='Chip' />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'start', gap: 4, mt: 4 }}>
            <Box sx={{ background: "#690000", minWidth: "140px", p: 0.5, textAlign: "center" }}>
              <Typography variant="h5" color="#fff" sx={{ p: 0.8 }}>9810</Typography>
              <Typography variant="h6" color="#fff" sx={{ width: "100%", p: 0.8, background: "#200000" }}>BALANCE</Typography>
            </Box>
            <Box sx={{ background: "#690000", minWidth: "140px", p: 0.5, textAlign: "center" }}>
              <Typography variant="h5" color="#fff" sx={{ p: 0.8 }}>9810</Typography>
              <Typography variant="h6" color="#fff" sx={{ width: "100%", p: 0.8, background: "#200000" }}>TOTAL BET</Typography>
            </Box>
            <Box sx={{ background: "#690000", minWidth: "140px", p: 0.5, textAlign: "center" }}>
              <Typography variant="h5" color="#fff" sx={{ p: 0.8 }}>9810</Typography>
              <Typography variant="h6" color="#fff" sx={{ width: "100%", p: 0.8, background: "#200000" }}>WINING</Typography>
            </Box>
          </Box>
        </Grid>




        {/* spinner  */}
        <Grid xs={4} item>
            <div className="spinWheelInner">
              <div className="wheelContainerOuter">
                <div className="wheelContainer">
                  <div className="wheelImages">
                    <div className="wheelOuterImage">
                      <img src={wheelGif} alt="wheel outer" />
                    </div>
                    <div className="wheelCenterImage">
                      <img src={wheelCenter} alt="wheel center" />
                    </div>
                  </div>
                  <div className="container">
                    <div className="zero">0</div>
                    <div className="one">1</div>
                    <div className="two">2</div>
                    <div className="three">3</div>
                    <div className="four">4</div>
                    <div className="five">5</div>
                    <div className="six">6</div>
                    <div className="seven">7</div>
                    <div className="eight">8</div>
                    <div className="nine">9</div>
                  </div>
              </div>
            </div>
          </div>
        </Grid>

        {/* timer  */}
        <Grid item xs={4} sx={{ width: '100%', display: 'flex', alignItems: 'end', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <Box sx={{ width: "400px", display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 4, position: "relative" }}>
            <img src={BackgroundBlackLine} alt='' style={{ width: "80%", height: '50px' }} />
            <img src={userIcon} alt='' style={{ width: "40px", position: "absolute", top: "8px", left: "23%" }} />
            <Typography variant="body1" color="initial" sx={{ width: "40px", position: "absolute", top: "6px", left: "36%", color: "#fff", fontSize: "26px" }}>FUN002010009</Typography>
          </Box>
          <Box sx={{ width: "80%", display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: "relative" }}>
            <img src={timerBackground} alt='' style={{ width: "100px" }} />
          </Box>
          <Box sx={{ width: "80%", border: "4px solid #a08301", borderRadius: '10px', py: 2, px: 2, textAlign: "center", }}>
            <Typography variant="body1" color="#fff">For Amusement Only. Your Minimum Bet 10 and the maximum Bet 50000</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            {dataArray.map((item, index) => (
              <Box
                key={index}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', }} >
                <Typography variant="h6" sx={{ width: "40px", textAlign: 'center', color: 'white', border: '1px solid #fff', fontWeight: 600, backgroundImage: "linear-gradient(to bottom, #FF0000 40%, #A60404 90%)" }}>{item.value}</Typography>
                <Typography variant="h6" sx={{ width: "40px", textAlign: 'center', color: 'white', border: '1px solid #fff', fontWeight: 600, backgroundImage: "linear-gradient(to bottom, #FF0000 40%, #A60404 90%)" }}>{item.multiplier}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 2 }}>
            <Button className='btn-bakground' sx={{ width: '140px', color: "#fff", fontSize: "20px", fontWeight: 600, borderRadius: "10px", backgroundImage: "linear-gradient(#d01b1b, #FF0000, #d01b1b)" }}>PREV</Button>
            <Button className='btn-bakground' sx={{ width: '140px', color: "#fff", fontSize: "20px", fontWeight: 600, borderRadius: "10px", backgroundImage: "linear-gradient(#d01b1b, #FF0000, #d01b1b)" }}>CLEAR</Button>
            <Button className='btn-bakground' sx={{ width: '140px', color: "#fff", fontSize: "20px", fontWeight: 600, borderRadius: "10px", backgroundImage: "linear-gradient(#d01b1b, #FF0000, #d01b1b)" }}>Dolble</Button>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 4, mt: 8 }}>
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