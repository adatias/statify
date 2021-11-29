import React from 'react'
import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../DataLayer/DataLayer';
import './Header.css'

function Header() {
  const [{ user }] = useDataLayerValue();

  return (
    <div className="header">
      <div className="headerLeft">
      </div>

      <div className="headerRight">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
