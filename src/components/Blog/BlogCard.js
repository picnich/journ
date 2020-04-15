import React, { useEffect, useState } from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
// import Category from "../Category"
import TagNoLink from "../Category/TagNoLink"

const BlogItem = styled.article`
  width: 100%;
  padding: 0 20px;
`

const BlogItemContent = styled.div`
  margin-top: 38px;
  /* background-color: #272727;
  border-top: 3px solid var(--primary);
  padding: 2.5rem 1.25rem; */

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    color: var(--c-title);
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
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin: 0;
    text-transform: none;
    @media (min-width: 768px) {
      font-size: 17px;
    }
  }
`
const ImgContainer = styled.div`
  object-fit: cover;

  .banner-image {
    max-height: 320px;
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
const BlogCard = ({ blog }) => {
  const [ content, setContent ] = useState(undefined);
  const { slug, title, bannerImage, richText, category } = blog
  const excerpt = richText.json.content[0]
  useEffect(() => {
    setContent(documentToReactComponents(excerpt, options));
  }, [])
  return (
    <BlogItem>
      <AniLink
        className="btn"
        cover
        bg="var(--background)"
        to={`${category.slug}/${slug}`}
      >
        <ImgContainer>
          <Image className="banner-image" fluid={bannerImage.fluid} alt="Banner Image" />
        </ImgContainer>
        <BlogItemContent>
          {/* <Category category={category} /> */}
          <TagNoLink category={category} />
          <h2>{title}</h2>
          <p>{content}</p>
          {/* <button className="btn">Read Post</button> */}
        </BlogItemContent>
      </AniLink>
    </BlogItem>
  )
}

export default BlogCard
