import React, { useState } from 'react'
import './index.css';
import LoginIcon from '@mui/icons-material/Login';
import { AccountCircle } from '@mui/icons-material';

type props = {
    auth: boolean,
}

function Bar() {
  return (
    <header>
        <div className='header-bar'>
            <p>How is weather today?</p>
              <div className='header-icon'>
                {/* {auth? <AccountCircle /> : <LoginIcon />} */}
                <a href="./UserAccount/LogIn"><LoginIcon /></a>
              </div>
        </div>
    </header>
  )
}

export default Bar;
