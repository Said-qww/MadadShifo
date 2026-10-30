import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <div className='flex w-full align-middle py-1 px-20 justify-between fixed bg-white'>
        <img className='h-25' src={Logo} alt="" />
        <div className='w-100 justify-between flex self-center'>
          <Link to="/">Bosh sahifa</Link>
          <Link to="/Xizmatlar">Xizmatlar</Link>
          <Link to="/Shifokorlar">Shifokorlar</Link>
        </div>
    </div>
  )
}

export default Header