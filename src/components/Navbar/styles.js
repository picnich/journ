import styled from "styled-components"


export const NavBar = styled.nav`
  padding: 0 1.875rem;
  width: 100%;
`

export const NavButton = styled.button`
  position: relative;
  margin-top: 16px;
  /* color: #fff; */
  color: black;
  padding: 12px 0 17px 0;
  order: 1;
  border: none;
  background-color: transparent;
  font-size: var(--menuItem);
  font-weight: 900;
  letter-spacing: -1px;
  z-index: 10;
  width: 32px;

  /* &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 10px;
    background-color: var(--primary);
  } */

  @media (min-width: 768px) {
    display: none !important;
  }
`

export const NavLogo = styled.div`
  font-family: "Canela";
  font-size: ${props => props.isBlogPost ? "28px" : "50px"};
  font-weight: 100;
  text-align: center;
  /* maargin-bottom: 70px; */
  /* width: 60%; */
  flex-shrink: 0;
  letter-spacing: -0.5px;
  padding: 7px 0;
  z-index: 2;
  margin-bottom: ${ props => props.isBlogPost ? "0px" : "70px"};
  margin-top: 16px;
  position: relative;

  @media (min-width: 768px) {
    font-size: ${props => props.isBlogPost ? "32px" : "100px"};
    padding: 12px 0;
  }
  /* @media (min-width: 1200px) {
    font-size: 100px;
    padding: 12px 0;
  } */

  a {
    /* color: #fff; */
    color: black;
    text-decoration: none;
    transition: color 0.3s;

    @media (hover: hover) {
      &:hover {
        color: var(--c-lightgrey);
      }
    }
  }

  .byJourn {
    position: absolute;
    top: 0;
    left: 50%;
    left: ${ props => props.isBlogPost ? "0%" : "50%"};
    transform: ${ props => props.isBlogPost ? "translate(0%, 48px)" : "translate(-50%, 60px)"};
    display: inline-flex;
    top: auto;
    @media screen and (min-width: 768px) {
      bottom: 60px;
    }


    img {
      max-width: 80px;

      @media screen and (min-width: 768px) {
        max-width: 124px;
      }
    }
  }
  .byJournPost {
    position: absolute;
    top: 0;
    left: 50%;
    left: 0%;
    transform: translate(5px,44px);

    @media (min-width: 768px) {
      display: inline-block;
      position: relative;
      top: 2px;
      transform: none;
      left: 16px;
    }


    img {
      max-width: 80px;
    }
  }
`

// export const LogoContainer = styled.div`
//   /* width: 100px; */
//   margin-left: auto;
//   margin-right: auto;
//   /* max-height: 15px; */
//   /* object-fit: contain;  */

//   .gatsby-image-wrapper {
//     height: 15px;
//   }
// `


export const ThemeSwitch = styled.div`
  width: 40%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;
`

export const NavCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
  justify-content: ${ props => props.isBlogPost ? "space-between" : "center"};
  max-width: ${ props => props.isBlogPost ? "none" : "1200px" };
  margin: 0 auto;
  position: relative;
`

export const NavLinksPost = styled.div`
  display: flex;
  align-content: center;
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  padding: 0 1.875rem;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  /* max-width: 500px; */
  transform: translateX(-100%);
  transition: opacity 0.2s ease-in, transform 0.2s ease-in,
    visibility var(--transition) ease-in;

  @media (min-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    transform: translate(0);
    width: auto;
    height: auto;
    visibility: visible;
    opacity: 1;
    padding: 0;
  }

  &.show-nav {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    width: 70%;
    background: white;
    z-index: 2;
    box-shadow: 5px 10px 20px rgba(0,0,0, 0.2);

    li {
      margin-bottom: 1rem;
      
      
      a {
        font-size: 1.2rem;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    text-transform: capitalize;
    font-size: var(--menuItem);

    @media (min-width: 768px) {
      margin-right: 24px;

    }

    @media (min-width: 1200px) {
      margin-right: 30px;
    }
  }

  a {
    color: var(--c-title);
    font-size: 16px;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;

    &.active {
        font-weight: bold;
        color: var(--c-title);
    }

    &:focus {
      color: var(--c-lightgrey);
    }
  }
  li.link-shop a { 
    display: flex; 
    align-items: center;
    margin-left: 8px;
    color: var(--c-journpeach) !important;
    font-weight: bold;
      
  }

  li.link-shop svg {
      max-width: 24px;
      margin-right:7px;
  }
  @media (hover: hover) {
    a:hover {
      color: var(--c-lightgrey);
    }
  }
`
export const NavLinks = styled.div`

  @media (min-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    transform: translate(0);
    width: auto;
    height: auto;
    visibility: visible;
    opacity: 1;
    padding: 0;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }

  li {
    text-transform: capitalize;
    font-size: var(--menuItem);
    margin-right: 15px;
    margin-bottom: 15px;

    @media (min-width: 1200px) {
      margin-right: 25px;
    }
  }

  a {
    color: var(--c-title);
    font-size: 16px;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;

    &.active {
        font-weight: bold;
        color: var(--c-title);
    }

    &:focus {
      color: var(--c-lightgrey);
    }
  }
  li.link-shop a { 
      display: flex; 
      align-items: center;
      margin-left: 8px;
      color: var(--c-journpeach) !important;
      font-weight: bold;
  }

  li.link-shop svg {
      max-width: 24px;
      margin-right:7px;
  }


  @media (hover: hover) {
    a:hover {
      color: var(--c-lightgrey);
    }
  }
`


export const Spacer = styled.div`
  height: 72px;

  @media (min-width: 768px) {
    height: 91px;
  }

  @media (min-width: 1200px) {
    height: 113px;
  }
`

