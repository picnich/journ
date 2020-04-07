import React from "react"
import BlogCard from "./BlogCard"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BlogFeaturedCard from "./BlogFeaturedCard"

// const Section = styled.section`
//   grid-column: 1 / 4;
//   margin-left: -20px;
//   margin-right: -20px;
// `
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* padding: var(--paddingStd) var(--paddingBorder); */
  padding-top: 24px;
  padding-bottom: 24px;
  
  @media (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }


`

const FlexItem = styled.div`
  width: 100%;
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    /* flex: 0 0 calc(100% / 3); */
    width: 50%;
    margin-bottom: 100px;
  }
`

const getHomePosts = graphql`
  query {
    posts: allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          slug
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
const BlogListHome = () => {
  const { posts } = useStaticQuery(getHomePosts)
  const latestPost = posts.edges[0]
  const allPosts = posts.edges.slice(1, posts.length)
  return (
    <>
      <BlogFeaturedCard blog={latestPost.node} />

      <FlexContainer>
        {allPosts.map(({ node }) => {
          return (
            <FlexItem>
              <BlogCard key={node.id} blog={node} />
            </FlexItem>
          )
        })}
      </FlexContainer>
    </>
  )
}

export default BlogListHome
