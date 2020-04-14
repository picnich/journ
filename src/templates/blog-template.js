import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import Grid from "../components/Grid/Grid"
import styled from "styled-components"
import Image from "gatsby-image"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Author from "../components/Author"
import Category from "../components/Category"
import { useInView } from 'react-intersection-observer'
import NavbarPost from "../components/Navbar/NavbarPost"
import { StickyNav } from "../components/Navbar/styles"

// import StickyNav from "../components/Navbar/StickyNav"

const ContentArea = styled.div`
  h1 {
    margin-top: 0;
    text-transform: capitalize;
    margin-bottom: 28px;
  }
`
const GridPost = styled.div`
  display: grid;
  grid-gap: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: content-box;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FeaturedImage = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  margin-top: 60px;

  .main-image {
    max-height: 600px;
  }
`
const PostDetails = styled.div`
  text-align: center;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 42px;
`


const Text = styled.p`
  max-width: 890px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  line-height: 180%;
  
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  a {
    color: #E9805D;
  }

  p:first-child:first-letter {
    font-size: 4em;
    float: left;
    margin-top: .25em;
    margin-right: 0.5rem;
    font-family: "Canela-Light";
    color: var(--c-darkgreen);
}
`

const BlockQuote = styled.blockquote`
    color: var(--c-darkgreen);
    max-width: 500px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-family: "Canela-Light";
    line-height: 1.35;

  /* &:before {
      content: '"';
      font-size:120px;
      font-family: "Avenir-Bold";
      position:absolute;
      text-align: center;
      opacity: 0.2
  } */

  p {
      font-size: 32px !important
  }
`

const ImgContainer = styled.div`
  max-width: 1140%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  margin-bottom: 32px;
  
  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  img {
    display: block;
    /* max-width: 100%; */
    width: 100%;
  }

  p {
    color: var(--c-text);
    font-size: 14px;
  }
`

const Blog = ({ data }) => {
  const {
    title,
    category, 
    author,
    bannerImage, 
    richText: { json },
  } = data.post

  const options = {
    // renderMark: {
    //   [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    // },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.QUOTE] : (node, children) => <BlockQuote>{children}</BlockQuote>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // console.log(node)
        return (
          <ImgContainer>
            <img src={`${node.data.target.fields.file["en-US"].url}`} alt={node.data.target.fields.title["en-US"]} />
            <p>{node.data.target.fields.description["en-US"]}</p>
          </ImgContainer>
        )
      }
    },
  }

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  })


  return (
    <Layout blogPost={true}>
      <SEO title={title} />
      <FeaturedImage ref={ref}>
        <Image
          className="main-image"
          fluid={bannerImage.fluid}
          alt="Placeholder"
        />
      </FeaturedImage>
      <section className="section-padding">
        <GridPost>
          <ContentArea>
            <PostDetails>
              <Category category={category} />
              <h1>{title}</h1>
              <Author author={author} />
            </PostDetails>
            <article>{documentToReactComponents(json, options)}</article>
          </ContentArea>
        </GridPost>
      </section>
      <StickyNav inView={inView}>
        <NavbarPost />
      </StickyNav>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      category {
        slug
        name
      }
      author {
        name
        title
        image {
          fluid(maxWidth: 60, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
      richText {
        json
      }
      bannerImage {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Blog