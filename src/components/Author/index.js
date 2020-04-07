import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const AuthorContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: center;

    > div:first-child {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        margin-right: 12px;
    }
    span {
        display: block;
        color: var(--c-lightgrey);
    }
    strong {
        color: var(--c-title);
    }

`

const Author = ({ author }) => {
    return (
        <AuthorContainer>
            <Image fluid={author.image.fluid} />
            <div>
                <span><strong>{author.name}</strong></span>
                <span>{author.title}</span>
            </div>
        </AuthorContainer>
    )
}

export default Author