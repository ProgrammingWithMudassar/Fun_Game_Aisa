import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { Box, Typography, Modal, Button } from '@mui/material'; // Import Modal and Button from Material-UI
import { GoDotFill } from "react-icons/go";
import '../styles.css';

function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // State to control the logout modal

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    setIsLogoutModalOpen(true); // Open the logout modal
    setIsMenuOpen(false); // Close the menu if open
  };

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false); // Close the logout modal
  };

  const menuItems = [
    'Add Fund',
    'Withdraw Fund',
    'Winning History',
    'Refer & Earn',
    'How to Play',
    'Contact Us',
  ];

  return (
    <Box className="menuBar">
      <Box onClick={toggleMenu} style={{ color: 'red', cursor: 'pointer' }}>
        {!isMenuOpen && (
          <button className='menu-btn'><FaBars size={26} /></button>
        )}
      </Box>
      {isMenuOpen && (
        <Box sx={{ width: '90%' }}>
          <button className='open-menu-btn' onClick={toggleMenu}><FaBars size={26} /><span style={{ marginLeft: '40px', color: '#fff', fontSize: '30px' }}>Menu Bar</span></button>
          {menuItems.map((item) => (
            <Box key={item} sx={{ pl: 2 }}>
              <Link to={`/${item.replace(/ & /g, '').toLowerCase()}`} className="menu-bar-link">
                <GoDotFill color='#fff' size={30} style={{ marginRight: '10px' }} />
                <Typography sx={{ width: "100%", fontSize: '30px', borderBottom: "1px solid #fff", padding: '10px 0' }}>{item}</Typography>
              </Link>
            </Box>
          ))}
          <Box sx={{ cursor: 'pointer', pl: 2, p: 2 }}>
            <GoDotFill color='#fff' size={26} style={{ marginRight: '10px' }} />
            <button className='logout' onClick={handleLogout}>Log Out</button>
          </Box>
        </Box>
      )}

      {/* Logout Modal */}
      <Modal
        open={isLogoutModalOpen}
        onClose={handleCloseLogoutModal}
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
}

export default MenuBar;
