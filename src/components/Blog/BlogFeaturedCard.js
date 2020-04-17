import React, { useState, useEffect } from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
// import Category from "../Category"
import TagNoLink from "../Category/TagNoLink"


const GridContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 24px;
  display: grid;
  /* grid-gap: 30px; */
  grid-template-columns: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 100px;
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
  margin-bottom: 0;

  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (min-width: 1024px) {
    padding: 48px 52px;
  }
  @media (min-width: 1280px) {
    padding: 58px 68px;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      font-size: 38px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 44px;
    }
    @media screen and (min-width: 1280px) {
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
    text-transform: none;
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
  const [ content, setContent ] = useState(undefined);
  const { slug, title, bannerImage, richText, category } = blog
  const excerpt = richText.json.content[0]
  useEffect(() => {
      setContent(documentToReactComponents(excerpt, options));
  },[])
  return (
    <AniLink
      className="btn"
      cover
      bg="var(--background)"
      to={`${category.slug}/${slug}`}
    >
    <GridContainer>
        <HeroImage>
          <Image fluid={bannerImage.fluid} alt="Banner Image"  />
        </HeroImage>
        <BlogItemContent>
          {/* <Category category={category} /> */}
          <TagNoLink category={category} />
          <h2>{title}</h2>
          <p>{content}</p>
          {/* <button className="btn">Read Post</button> */}
        </BlogItemContent>
    </GridContainer>
    </AniLink>
  )
}

export default BlogFeaturedCard
