import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
// import links from "../../constants/links"
// import quickNav from "../../constants/quickNav"
// import styled from "styled-components"
// import DarkMode from "../DarkMode/DarkMode"
import IconCart from "../../images/icon-cart.svg"
import {
  NavBar, 
  // NavButton, 
  NavLogo, 
  // ThemeSwitch, 
  NavCenter, 
  NavLinks, 
  // LogoContainer
} from "./styles"




const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const {
    site: { siteMetadata },
    allContentfulBlogCategory: { edges: categories },
    logoSVG,
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulBlogCategory {
        edges {
          node {
            name
            slug
          }
        }
      }
      logoSVG: file(relativePath: {eq: "byJournLogo.svg"}) {
        name
        relativePath
        publicURL
      }
    }
  `)

  return (
    <>
      <NavBar>
        <NavCenter>
          <NavLogo>
            <AniLink cover bg="var(--background)" to="/">
              {siteMetadata.title}
            </AniLink>
            <a className="byJourn" href={`https://ourjourn.com`}>
              <img src={logoSVG.publicURL} alt="Journ Logo" />
            </a>
          </NavLogo>
        </NavCenter>
        {/* <NavCenter>
          <NavButton type="button" onClick={toggleNav}>
            Menu <IconMenu />
          </NavButton>
        </NavCenter> */}
        <NavCenter>
          <NavLinks
            // className={
            //   isOpen ? `${"navbar-links"} ${"show-nav"}` : `${"navbar-links"}`
            // }
          >
            <ul>
              {/* Category Menu */}
              <li>
                <AniLink cover bg="var(--background)" to={"/"} activeClassName="active">
                  All Categories
                </AniLink>
              </li>

              {categories.map(({ node }, index) => {
                return (
                  <li key={index}>
                    <AniLink cover bg="var(--background)" to={node.slug} activeClassName="active">

                      {node.name}
                    </AniLink>
                  </li>
                )
              })}
              <li className="link-shop">
                <IconCart />
                <a href="https://ourjourn.com" rel="Link to Journ Shop" target="__blank">
                  Shop
                </a>
              </li>
            </ul>
          </NavLinks>
        </NavCenter>
      </NavBar>
      {/* <Spacer /> */}
    </>
  )
}

export default Navbar
