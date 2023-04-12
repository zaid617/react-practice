import React from 'react'
import "./header.css"
import { FavoriteBorder, ShoppingBag } from '@mui/icons-material'

export default function Header() {
  return (
    <div className='header'>

        <div className="subHeaderbox1">
            <ul>
                <li className='listItem'>Home</li>
                <li className='listItem'>Blog</li>
                <li className='listItem'>About</li>
            </ul>
        </div>

        <div className="subHeaderbox2">
            <h2>Exery</h2>
        </div>

        <div className="subHeaderbox3">

                <input type="search" className="search" placeholder=" Search...." />
                <FavoriteBorder className='b' style={{marginLeft:"5px",marginRight:"5px"}} />
                <ShoppingBag className='b'/>

        </div>
      
    </div>
  )
}
