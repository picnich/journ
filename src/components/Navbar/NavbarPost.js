import React, { useState, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// import Image from "gatsby-image"
import IconMenu from "../../images/navigation-menu.svg"
import IconClose from "../../images/icon-close-white.svg"
import IconJ from "../../images/JOURN-J.svg"
import IconFb from "../../images/icon-facebook.svg"
import IconTw from "../../images/icon-twitter.svg"
import IconIg from "../../images/icon-instagram.svg"
import socials from "../../constants/socials"

import {
  NavBar, 
  NavButton, 
  NavLogo, 
  // ThemeSwitch, 
  NavCenter, 
  NavLinksPost, 
} from "./styles"

const FooterMenu = styled.div`
  /* padding-top: 40px;
  padding-bottom: 40px; */
  padding-top: 16px;
  padding-bottom: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  svg {
    max-width: 24px;
  }

  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    flex-direction: row;
  }

  li {
    font-size: var(--menuItem);
    padding-bottom: 10px;
    align-self: flex-start;
    margin-left: 2rem;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      padding-bottom: 5px;
    }
  }
`

const NavbarPost = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  useEffect(() => {
		document.body.style.margin = isOpen ? 0 : 'auto';
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
		document.body.style.height = isOpen ? '100%' : 'auto';
		document.body.style.touchAction = 'manipulation';
	}, [isOpen])

  const {
    site: { siteMetadata },
    allContentfulBlogCategory: { edges: categories },
    logoSVG
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
        <NavCenter isBlogPost={true}>
          <NavLogo isBlogPost={true}>
            <AniLink cover bg="var(--background)" to="/">
              {siteMetadata.title}
            </AniLink>
            <a className="byJournPost" href={`https://ourjourn.com`}>
                <img src={logoSVG.publicURL} alt="Journ Logo" />
            </a>
          </NavLogo>
          {/* <ThemeSwitch></ThemeSwitch> */}
          <NavButton type="button" onClick={toggleNav}>
            { isOpen ? <IconClose /> : <IconMenu />}
          </NavButton>
          <NavLinksPost
            isBlogPost={true}
            className={
              isOpen ? `${"navbar-links"} ${"show-nav"}` : `${"navbar-links"}`
            }
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
                <a href="https://ourjourn.com" rel="Link to Journ Shop" target="__blank">
                  <IconJ />
                  Shop
                </a>
              </li>            
            </ul>
            { isOpen && (
              <FooterMenu>
                <ul>
                  {socials.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {
                            item.title === "Facebook" ? <IconFb /> : 
                            item.title === "Twitter" ? <IconTw /> :
                            <IconIg />
                          }
                          {/* {item.title} */}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </FooterMenu>
            )}
          </NavLinksPost>
        </NavCenter>
      </NavBar>
      {/* <Spacer /> */}
    </>
  )
}

export default NavbarPost
