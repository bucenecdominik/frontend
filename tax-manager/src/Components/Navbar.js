import React from 'react'
import { motion } from "framer-motion";

const Navbar = () => {

const [user, setUser] = React.useState(false) 
const [arrow, setArrow] = React.useState(false)

  return (
    <nav>
        <div className="dropdown">
            <span 
                onMouseEnter={() => setUser(!user)} 
                onMouseLeave={() => setUser(!user)} 
                id='login' 
                className='dropbtn'>
                <img  
                    src={user ? './imgs/users.svg': "./imgs/user.svg"}>
                </img>
                <a>Přihlášení</a>
            </span>
            <div 
                class="dropdown-content">
                <a 
                    href="#">Nastavení</a>
                <a 
                    href="#">Odhlásit se</a>
            </div>
        </div>
        <h2 
            className='navbar-header'>TAX TRACKER</h2>
        <div 
            className="navbar-links">
            <a 
                href='#' id='uvod'>Úvod</a>
            <a 
                href='#' id='vykazy'>Výkazy</a>
            <span 
                className='reporty-span'
                onMouseEnter={() => setArrow(!arrow)} 
                onMouseLeave={() => setArrow(!arrow)}>
                <a 
                    href='#' id='reporty'>Reporty 
                    <img 
                        className='arrow' 
                        src={arrow ? "./imgs/down.svg" : "./imgs/up.svg" }>
                    </img> 
                </a>
                <div 
                    class="reporty-dropdown">
                    <a 
                        href="#">Měsíční</a>
                    <a 
                        href="#">Roční</a>
                </div>
            </span>
        </div>
    </nav>
  )
}

export default Navbar
