import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const CategoryContainer = styled.div`
    background: var(--c-darkgreen);
    display: inline-block;
    padding: 8px 14px;
    text-transform: uppercase;
    margin-bottom: 28px;
    transition: var(--transition) all;

    a {
        color: white;
        text-decoration: none;
        letter-spacing: 1px;
        font-size: 12px;
        font-family: 'Avenir-Bold', sans-serif;

        :hover {
            color: white;
        }

        
    }
    :hover {
        background: var(--c-journpeach);
    }
`

const Category = ({ category }) => {
    return (
        <CategoryContainer>
            <AniLink cover bg="var(--background)" to={`/${category.slug}`}>
                {category.name}
            </AniLink>
        </CategoryContainer>
    )
}

export default Category