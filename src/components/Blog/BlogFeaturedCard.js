import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Category from "../Category"


const GridContainer = styled.div`
  margin-top: 50px;
  display: grid;
  /* grid-gap: 30px; */
  grid-template-columns: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  /* @media (min-width: 1200px) {
    grid-template-rows: 1fr 1fr;
    grid-gap: 40px;
  } */
`
const HeroImage = styled.div`
  width: 100%;
  /* background-color: var(--primary); */
  border: none;
  outline: none;

  .gatsby-image-wrapper {
    object-fit: cover;
    height: 100%;
  }

`
const BlogItemContent = styled.div`
  background-color: var(--c-lightrose);
  padding: 24px 28px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    padding: 58px 68px;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      font-size: 52px;
    }
  }

  p {
    /* margin-bottom: 40px; */
    color: var(--c-text);
    font-size: 16px;
    font-family: "Avenir-Regular";
    line-height: 180%;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin: 0;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <div>
          <img src={`${node.data.target.fields.file["en-US"].url}`} alt={node.data.target.fields.title["en-US"]} />
        </div>
      
      )
    }
  },
}
const BlogFeaturedCard = ({ blog }) => {
  const { slug, title, bannerImage, published, richText, category } = blog
  
  const excerpt = richText.json.content[0]
  return (
    <AniLink
      className="btn"
      cover
      bg="var(--background)"
      to={`/${category.slug}/${slug}`}
    >
    <GridContainer>
        <HeroImage>
          <Image fluid={bannerImage.fluid} alt="Banner Image"  />
        </HeroImage>
        <BlogItemContent>
          <Category category={category} />
          <h2>{title}</h2>
          <p>{documentToReactComponents(excerpt, options)}</p>
          {/* <button className="btn">Read Post</button> */}
        </BlogItemContent>
    </GridContainer>
    </AniLink>
  )
}

export default BlogFeaturedCard
