import React from 'react'
import './header.css'

export default function Header({money}) {
    
  return (
    <div className='header'>
        <h1>
            To spend : {money} $. You have a lot of money
        </h1>
    </div>
  )
}
