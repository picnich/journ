import React from "react"
import styled from "styled-components"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const CategoryContainer = styled.div`
    background: var(--c-darkgreen);
    display: inline-block;
    padding: 10px 14px 8px;
    text-transform: uppercase;
    margin-bottom: 28px;
    transition: var(--transition) all;
    color: white;
    text-decoration: none;
    letter-spacing: 1px;
    font-size: 12px;
    font-family: 'Avenir-Bold', sans-serif;
`

const TagNoLink = ({ category }) => {
    return (
        <CategoryContainer>
            {category.name}
        </CategoryContainer>
    )
}

export default TagNoLink