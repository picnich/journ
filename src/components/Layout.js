import React from "react"
import Navbar from "./Navbar/Navbar"
import NavbarPost from "./Navbar/NavbarPost"
import Footer from "./Footer"
import GlobalStyle from "./Styles/GlobalStyle"


const Layout = ({ children, blogPost }) => {
  return (
    <>
      <GlobalStyle />
      {blogPost ? <NavbarPost /> : <Navbar /> }
      {children}
      <Footer />
    </>
  )
}

export default Layout
