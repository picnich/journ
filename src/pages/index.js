import React, { useState, useEffect} from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BlogListHome from "../components/Blog/BlogListHome"
import GridHome from "../components/Grid/GridHome"
import Newsletter from "../components/Newsletter/Newsletter"
// import { useInView } from 'react-intersection-observer'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const scrollThreshold = 1000;

const Index = () => {
  // const [ isNewsOpen, setNews ] = useState(inView);
  const [ isCancelled, setCancel ] = useState(false);
  const [key, setKey] = useState(undefined)
  
  const [showNewsletter, setNewsletter ] = useState(false);
  
  // const [ref, inView] = useInView({
  //     threshold: 0.5,
  //   })

  useEffect(() => {
    setKey(localStorage.getItem('popup'))
  }, [])
  
  useScrollPosition(({ prevPos, currPos }) => {
    setNewsletter(currPos.y < -scrollThreshold)
  })
  
  return (
    <>
      <Layout>
        <SEO title="Home" />
        {/* <section ref={ref}> */}
          <GridHome>
              <BlogListHome />
          </GridHome>
        {/* </section> */}
      </Layout>
      { 
        !key && 
        !isCancelled && 
        <Newsletter inView={showNewsletter} handleClick={() => setCancel(true)} />
      }
    </>
  )
}


export default Index
