import React, { useState } from 'react';
import { Box, Typography, Modal, Button } from '@mui/material';
import { FaWhatsapp } from "react-icons/fa";
import '../styles.css';

const LoginCard = () => {
  const [open, setOpen] = useState(false); // State for the modal open/close

  // Function to handle the modal open action
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle the modal close action
  const handleClose = () => {
    setOpen(false);
  };

  // The style for the modal content
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#000", height: "calc(100vh - 300px)", width: "400px",
          border: "2px solid #fff", borderRadius: "10px", px: 2
        }}>
        <Typography variant="h4" color="#fff" sx={{ width: '100%', textAlign: 'center', py: 4 }}>Login Now</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ position:'relative' }}>
            <input type="text" placeholder='Enter Your Number' className='input' />
            <button className='send-otp' style={{ position: 'absolute', right: '10px', top: '6px' }}>Send OTP</button>
          </Box>
          <input type="text" placeholder='Enter OTP' className='input' />
          <input type="text" placeholder='Enter Referral Code (optional)' className='input' />
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <button className='btn' onClick={handleOpen}>Register</button>
            <button className='btn'><FaWhatsapp size={26}/>Contact Us</button>
          </Box>
        </Box>
      </Box>

      {/* Logout Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="logout-modal-title"
        aria-describedby="logout-modal-description"
      >
        <Box
          sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            boxShadow: 24, p: 4, borderRadius: '8px', maxWidth: '80%', px: 8, border:'1px solid #fff'
          }} className='gradient-background'>
          {/* title  */}
          <Typography id="logout-modal-title" sx={{ color: '#fff', fontSize: '24px', fontWeight: 600 }}>Are you sure you want to log Out?</Typography>
          {/* actions  */}
          <Box sx={{ width:"100%",display: 'flex', justifyContent: 'space-between', mt: 2, gap:2 }}>
            <Button onClick={handleCloseLogoutModal} variant="contained" className='btn-bakground' sx={{ fontSize:'24px', borderRadius:'10px', border:'2px solid #fff', p:0.6 }}>Yes</Button>
            <Button onClick={handleLogout}  variant="contained" className='btn-bakground ' sx={{ fontSize:'24px', borderRadius:'10px', border:'2px solid #fff', p:0.6 }}>No</Button>
          </Box>

        </Box>
      </Modal>
    </Box>
  );
};

export default LoginCard;
