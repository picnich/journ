import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import GridHome from "../components/Grid/GridHome"
import BlogCard from "../components/Blog/BlogCard"
import SEO from "../components/SEO"

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 24px;
  padding-bottom: 48px;
  
  @media (min-width: 768px) {
    padding-top: 100px;
  }
`

const FlexItem = styled.div`
  width: 100%;
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    /* flex: 0 0 calc(100% / 3); */
    width: 50%;
    margin-bottom: 100px;
  }
`

const BlogCategoryTemplate = props => {
  // const { category } = props.pageContext

  const { data } = props
  return (
    <Layout>
      <SEO title="Blogs" />
        <GridHome>
          <FlexContainer>
            {data.post.edges.map(({ node }, i) => {
              return (
                <FlexItem key={i}>
                  <BlogCard blog={node} />
                </FlexItem>
              )
            })}
          </FlexContainer>
        </GridHome>
    </Layout>
  )
}

export const query = graphql`
  query getCategoryPosts( $category: String ) {
    post: allContentfulBlogPost(
      sort: { fields: createdAt, order: DESC }
      filter: {category: {slug: { eq: $category }}}
    ) {
      edges {
        node {
          slug
          title
          category {
            slug
            name
          }
          bannerImage {
            fluid(maxWidth: 1800, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          richText {
            json
          }
        }
      }
    }
  }
`
export default BlogCategoryTemplate
