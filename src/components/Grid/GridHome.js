import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: content-box;

  /* @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  } */
`

const GridHome = ({ children }) => {
  return <Container>{children}</Container>
}

export default GridHome
