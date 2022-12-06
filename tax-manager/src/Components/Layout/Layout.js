import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = (props) => {
  return (
    <div className={props.class}>
        <Navbar/>
          {props.children}
        <Footer/>
    </div>
  )
}

export default Layout
