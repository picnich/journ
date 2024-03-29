import React from "react"
import BlogCard from "./BlogCard"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BlogFeaturedCard from "./BlogFeaturedCard"

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* padding: var(--paddingStd) var(--paddingBorder); */
  /* padding-top: 24px; */
  margin-bottom: 48px;
  
  /* @media screen and (min-width: 768px) {
    padding-top: 100px;
  } */
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
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          richText {
            json
          }
        }
      }
    }
    featuredPost: contentfulFeaturedPost {
      post {
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
`
const BlogListHome = () => {
  const { posts, featuredPost } = useStaticQuery(getHomePosts)
  // const latestPost = posts.edges[0]
  // const allPosts = posts.edges.slice(1, posts.length)
  const allPosts = posts.edges.filter(({node}) => node.slug !== featuredPost.post.slug);
  
  return (
    <>
      <BlogFeaturedCard blog={featuredPost.post} />
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
