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

const ContentArea = styled.div`
  /* grid-column: 1 / 4;
  @media (min-width: 1200px) {
    grid-column: 2 / 4;
  } */

  h1 {
    margin-top: 0;
    text-transform: capitalize;
    margin-bottom: 28px;
  }
  /* p {
    margin-bottom: 40px;
  } */
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
  padding-left: 30px;
  padding-right: 30px;
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

`

const ImgContainer = styled.div`
  max-width: 1140%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;


  img {
    display: block;
    /* max-width: 100%; */
    width: 100%;
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
      "embedded-asset-block": node => {
        console.log(node)
        // return (
        //     {/* <img src={node.data.target.fields.file['en-US'].url} alt="Placeholder" /> */}
        //   </div>
        // )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: node => <ImgContainer><img src={`${node.data.target.fields.file["en-US"].url}`} alt={node.data.target.fields.title["en-US"]} /></ImgContainer>
    },
  }

  return (
    <Layout blogPost={true}>
      <SEO title={title} />
      <FeaturedImage>
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


// introduction
// published(formatString: "MMMM Do YYYY")
// images {
//   fluid {
//     ...GatsbyContentfulFluid
//   }
// }
// richText {
//   json
// }