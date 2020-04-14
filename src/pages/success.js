import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import styled from "styled-components"

const Container = styled.section`
    max-width: 400px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 120px;
    margin-bottom: 120px;

    a {
        color: var(--c-darkgrey);

        &:hover {
            color: var(--c-journpeach);
        }
    }
`

const Success = () => {
    return (
        <Layout>
            <Container>
                <h2>Success.</h2>
                <p>Thanks for subscribing to our newsletter!</p>
                <AniLink
                    cover
                    bg="#212121"
                    to={`/`}
                >
                    Go to Home
                    </AniLink>
            </Container>
        </Layout>
    )
}

export default Success;