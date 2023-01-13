import React from 'react'
import '../CSS/Nav.css'
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import { BlueNav } from './BlueNav';
import SearchBar from './SearchBar';
export const Navigation = () => {
  
  return (
    <div>
      <div className='nav'>
        <div className="nav-a">
          <p>Coins</p>
          <p>Exchanges</p>
          <p>Swap</p>
        </div>
        <div className="logo">
          <img src="./Images/logo.svg" alt="" className="logo-img" />
        </div>
        <div className="nav-c">
          <SearchBar></SearchBar>
          <SettingsIcon />
          <Button variant="contained" color="success">
            Success
          </Button>
        </div>
      </div>
      <BlueNav />
    </div>
  )
}
