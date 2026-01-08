import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../public/Logo/Final-Logo.webp'

const Layout = () => {
  return (
    <div>
      <header className='grid grid-flow-col items-center justify-center gap-5' style={{ padding: '1rem', marginBottom: '2rem' }}>
        <Link to="/" className="logo_container m-auto">
          <img src={Logo} alt="Think-Bit Logo" />
        </Link>
        <h1 className="animate-fade-in">ThinkBit</h1>
      </header>

      <main className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Outlet />
      </main>

      <footer className='border-t border-t-cyan-600 p-4 mt-8'>
        <p>©2025 ThinkBit all rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout