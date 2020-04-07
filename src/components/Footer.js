import React from "react"
// import links from "../constants/links"
import socials from "../constants/socials"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// import Image from "gatsby-image"
import IconFb from "../images/icon-facebook.svg"
import IconTw from "../images/icon-twitter.svg"
import IconIg from "../images/icon-instagram.svg"

const FooterArea = styled.footer`
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  background: var(--c-darkgreen);
`

const FlexContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 40px; */
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
`

const FooterMenu = styled.div`
  /* padding-top: 40px;
  padding-bottom: 40px; */
  padding-top: 16px;
    padding-bottom: 16px;

  @media (min-width: 768px) {
    border-bottom: none;
    padding-bottom: 0;
  }

  svg {
    max-width: 24px;
  }

  ul {
    list-style: none;
    display: flex;
    /* flex-direction: column; */
    padding: 0;
    margin: 0;
    justify-content: center;
  }

  li {
    text-transform: capitalize;
    font-size: var(--menuItem);
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;
    margin-left: 2rem;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      padding-bottom: 5px;
    }
    @media (min-width: 1200px) {
      font-size: var(--menuItem);
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;

    &:focus {
      color: var(--c-journpeach);
    }
  }

  @media (hover: hover) {
    a:hover {
      color: var(--c-journpeach);
    }
  }
`

const Copyright = styled.div`
  /* padding-top: 20px;
  padding-bottom: 20px; */
  font-size: 0.875rem;
  width: 100%;
  color: white;
  text-align: center;

  a {
    text-decoration: none;
    color: white;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`

const LogoContainer = styled.div`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  /* max-height: 15px; */
  object-fit: contain; 

  .gatsby-image-wrapper {
    height: 15px;
  }

  img {
    max-width: 100px;
  }
`

const Footer = () => {
  const {
    site: { siteMetadata },
    logoSVG
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
      logoSVG: file(relativePath: {eq: "byJournLogo-white.svg"}) {
        name
        relativePath
        publicURL
      }
    }
  `)

  return (
    <>
      <FooterArea>
        <FlexContainer className="container">
          <FooterMenu>
            {/* <ul>
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <AniLink cover bg="#1d1d1d" to={item.path}>
                      {item.text}
                    </AniLink>
                  </li>
                )
              })}
            </ul> */}
             <LogoContainer>
                <AniLink cover bg="var(--c-title)" to={"/"}>
                  <img src={logoSVG.publicURL} rel="Journ Logo" />
                </AniLink>
              </LogoContainer>
          </FooterMenu>
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
          <Copyright>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://ourjourn.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Journ
            </a>
          </Copyright>
        </FlexContainer>
      </FooterArea>
    </>
  )
}

export default Footer
