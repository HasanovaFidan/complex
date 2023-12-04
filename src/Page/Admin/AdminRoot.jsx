import React from 'react'
import Header from '../../layout/Admin/Header/Header'
import Footer from '../../layout/Admin/Footer/Footer'
import { Outlet } from 'react-router'



function AdminRoot() {
  return (
    <div>
    <Header/>

    <Outlet/>
    <Footer/>
    </div>
  )
}

export default AdminRoot
