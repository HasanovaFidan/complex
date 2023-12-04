import React from 'react'
import Header from '../../layout/Site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/Site/Footer/Foter'


function SiteRoot() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SiteRoot
