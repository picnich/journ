import React, { useState } from "react"
import Navbar from "./Navbar/Navbar"
import NavbarPost from "./Navbar/NavbarPost"
import Footer from "./Footer"
import GlobalStyle from "./Styles/GlobalStyle"

const categoryPathnames = [
  "/",
  "/reflect",
  "/self-care",
  "/contribute"
]
const Layout = ({ children, blogPost, location }) => {
  // console.log(location.pathname);
  // const isBlogPost = categoryPathnames.filter( category => category === location.pathname)
  // console.log("Normal Navbar?" , categoryPathnames.includes(location.pathname))
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
