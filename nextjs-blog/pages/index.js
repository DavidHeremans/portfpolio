import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import Navigation from '../components/navigation'
import utilStyles from '../styles/utils.module.css'
import MyWork from '../components/mywork'
import Title from '../components/title'
import { getSortedPostsData } from '../lib/posts'
import Slideshow from '../components/slideshow'
import About from '../components/about'
import Contact from '../components/contact'

/*
// from tutorial

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}*/

export default function Home({allPostsData}) {

  return (
   
    <Layout>
      <Navigation> </Navigation>
      <Head>
        <title>{siteTitle}</title>
      </Head>


      <section className="container">
     
    <Title></Title>
    <MyWork></MyWork>
   <About></About>
   
    <Slideshow></Slideshow>
  
     <Contact></Contact>
      </section>
     
    </Layout>
   
  )
}