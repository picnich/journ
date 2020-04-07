import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BlogListHome from "../components/Blog/BlogListHome"
import GridHome from "../components/Grid/GridHome"

const Index = () => (
    <Layout>
      <SEO title="Home" />
      <GridHome>
        <BlogListHome />
      </GridHome>
    </Layout>
  )


export default Index
