import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'

const Layout = ({ children }) => {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout