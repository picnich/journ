import React, { useState, useEffect} from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BlogListHome from "../components/Blog/BlogListHome"
import GridHome from "../components/Grid/GridHome"
import Newsletter from "../components/Newsletter/Newsletter"
import { useInView } from 'react-intersection-observer'

const Index = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
  })
  const [ isNewsOpen, setNews ] = useState(inView);
  const [ isCancelled, setCancel ] = useState(false);
  // const [key, setKey] = useState(undefined)
  
  // useEffect(() => {
  //   localStorage.setItem('popup', true)
  // }, [])

  useEffect( () => {
    setNews(inView);
  }, [inView])

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <GridHome>
          <div ref={ref}>
            <BlogListHome />
          </div>
        </GridHome>
      </Layout>
      {/* { (localStorage.getItem("popup")) && !isCancelled && <Newsletter inView={inView} handleClick={() => setCancel(true)} />} */}
    </>
  )
}


export default Index
