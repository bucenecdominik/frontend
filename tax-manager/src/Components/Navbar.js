import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="dropdown">
            <span id='login' className='dropbtn'>
                <img className='logo' src='./imgs/user.svg'></img>
                <a>Přihlášení</a>
            </span>
            <div class="dropdown-content">
                <a href="#">Nastavení</a>
                <a href="#">Odhlásit se</a>
            </div>
        </div>
        <h2 className='navbar-header'>TAX TRACKER</h2>
        <div className="navbar-links">
            <a href='#' id='uvod'>Úvod</a>
            <a href='#' id='vykazy'>Výkazy</a>
            <a href='#' id='reporty'>Reporty </a>   
        </div>
    </nav>
  )
}

export default Navbar
