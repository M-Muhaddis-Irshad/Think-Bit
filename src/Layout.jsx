import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../public/Logo/Final-Logo.webp'

const Layout = () => {
  return (
    <div>
      <header className='grid grid-flow-col items-center justify-center gap-5' style={{ padding: '1rem', marginBottom: '2rem' }}>
        <div className="logo_container m-auto">
          <img src={Logo} alt="Think-Bit Logo" />
        </div>
        <h1 className="animate-fade-in heading">ThinkBit</h1>
      </header>
      <main className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout