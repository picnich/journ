import { createGlobalStyle } from "styled-components"

// import "./textStyles.css"
import CanelaWOFF2 from "../../fonts/Canela/Canela-Light.woff2"
import CanelaWOFF from "../../fonts/Canela/Canela-Light.woff"
import CanelaTTF from "../../fonts/Canela/Canela-Light.ttf"

import AvenirMedWOFF2 from '../../fonts/Avenir/AvenirLTStd-Medium.woff2'
import AvenirMedWOFF from '../../fonts/Avenir/AvenirLTStd-Medium.woff'
import AvenirMedTTF from '../../fonts/Avenir/AvenirLTStd-Medium.ttf'

import AvenirBoldWOFF2 from '../../fonts/Avenir/AvenirNextLTPro-Bold.woff2'
import AvenirBoldWOFF from '../../fonts/Avenir/AvenirNextLTPro-Bold.woff'
import AvenirBoldTTF from '../../fonts/Avenir/AvenirNextLTPro-Bold.ttf'

import AvenirRegWOFF2 from '../../fonts/Avenir/AvenirNextLTPro-Regular.woff2'
import AvenirRegWOFF from '../../fonts/Avenir/AvenirNextLTPro-Regular.woff'
import AvenirRegTTF from '../../fonts/Avenir/AvenirNextLTPro-Regular.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Canela-Light';
    src: url(${CanelaWOFF2}) format('woff2'),
            url(${CanelaWOFF}) format('woff'),
            url(${CanelaTTF}) format('truetype');
    font-display:auto;
    font-style:normal;
    font-weight:100;
}
@font-face {
    font-family: 'Avenir-Medium';
    src: url(${AvenirMedWOFF2}) format('woff2'),
            url(${AvenirMedWOFF}) format('woff'),
            url(${AvenirMedTTF}) format('truetype');
    font-display:auto;
    font-style:normal;
    font-weight:100;
}
@font-face {
    font-family: 'Avenir-Bold';
    src: url(${AvenirBoldWOFF2}) format('woff2'),
            url(${AvenirBoldWOFF}) format('woff'),
            url(${AvenirBoldTTF}) format('truetype');
    font-display:auto;
    font-style:normal;
    font-weight:100;
}
@font-face {
    font-family: 'Avenir-Regular';
    src: url(${AvenirRegWOFF2}) format('woff2'),
            url(${AvenirRegWOFF}) format('woff'),
            url(${AvenirRegTTF}) format('truetype');
    font-display:auto;
    font-style:normal;
    font-weight:100;
}

:root {
  ${'' /* Colours */}
  --background: #1d1d1d;
  --border: #313131;
  --primary: #ffc400;
  --inActive: #505050;
  --c-text: #555555;
  --c-title: #1c1c1c;
  --c-link: #E9805D;
  --c-lightgrey: #777777;
  --c-darkgreen: #004730;
  --c-lightrose: #FBF5F2;
  --c-journpeach: #F3AF98;

  ${'' /* Sizes */}
  --menuItem: 1.125rem;
  --transition: 0.3s;
  --h1: 2rem;
  --h2: 1.875rem;
  --paddingBorder: 20px;
  --paddingStd: 3.125rem;
  --paddingLarge: 4.688rem;

  @media(min-width:768px) {
    --h1: 2.375rem;
    --h2: 1.625rem;
    --paddingStd: 4.688rem;
    --paddingLarge: 7.813rem;
  }

  @media(min-width: 1200px) {
    --menuItem: 1.25rem;
    --h1: 3.125rem;
    --h2: 1.75rem;
    --paddingStd: 5.625rem;
    --paddingLarge: 9.375rem;
  }
}
* {
  box-sizing: border-box;

}  
body {
    font-family: 'Avenir-Regular', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    color: var(--c-text);
  }

h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.25em;

  @media(min-width: 1200px) {
    margin-bottom: 2rem;
  }
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--h1);
  ${'' /* font-weight: 900; */}
}

h2 {
  font-size: var(--h2);
  ${'' /* font-weight: 500; */}
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Canela-Light', sans-serif;
  color: var(--c-title);
  font-weight: normal;
}

a.btn,
button.btn {
    color: #fff;
    background-color: transparent;
    font-family: 'Avenir-Bold', sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    text-transform: capitalize;
    font-size: var(--menuItem);
    ${'' /* font-weight: 900; */}
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;

    ${'' /* &::after {
      content: "";
      display: block;
      position: absolute;
      height: 3px;
      left: 0;
      right: 0;
      bottom: 8px;
      background-color: var(--primary);
    } */}

    &:focus {
      color: var(--primary);
    }

    @media(hover: hover) {
      cursor: pointer;
    }
  }

  @media (min-width: 1200px) {
      font-size: var(--menuItem);
    }

  @media (hover: hover) {
    a:hover {
      color: var(--primary);
    }
  }

  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-padding {
    padding: var(--paddingStd) var(--paddingBorder);
  }
  
  .section-padding--large {
    padding: var(--paddingLarge) var(--paddingBorder);
  }
`

export default GlobalStyle;