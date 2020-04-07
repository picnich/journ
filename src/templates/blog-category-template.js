import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import GridHome from "../components/Grid/GridHome"
// import PageIntro from "../components/PageIntro/PageIntro"
import BlogCard from "../components/Blog/BlogCard"
import SEO from "../components/SEO"

// const Section = styled.section`
//   grid-column: 1 / 4;
//   margin-left: -20px;
//   margin-right: -20px;
// `
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 120px;
  padding-bottom: 120px;
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

// const Pagination = styled.div`
//   grid-column: 1 / 4;
//   text-align: right;

//   .btn {
//     margin-right: 20px;

//     &:hover {
//       cursor: pointer;
//     }

//     &.btn-active {
//       color: var(--primary);

//       &:after {
//         display: none;
//       }
//     }

//     &:last-child {
//       margin-right: 0;
//     }
//   }
// `

const BlogCategoryTemplate = props => {
  // const { category } = props.pageContext

  const { data } = props
  return (
    <Layout>
      <SEO title="Blogs" />
      {/* <section className="section-padding"> */}
        <GridHome>
            <FlexContainer>
              {data.post.edges.map(({ node }, i) => {
                return (
                  <FlexItem>
                    <BlogCard key={i} blog={node} />
                  </FlexItem>
                )
              })}
            </FlexContainer>
          </GridHome>
      {/* </section> */}
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


// postId: contentful_id
// published(formatString: "MMMM Do, YYYY")
// images {
//   fluid {
//     ...GatsbyContentfulFluid
//   }
// }