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
    <div className=" section" id="contact">
        <div className="row">
            <div className="col-3 section-title">
                <h2>Get in Touch</h2>
            </div>
            <div className="col-9">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" id="name" aria-describedby="helpId"
                            placeholder="Name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" aria-describedby="helpId"
                            placeholder="Subject"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId"
                            placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                    </div>

                    <button type="submit" className="btnSubmit">Send away</button>
                </div>
            </div>
        </div>
    </div>
     
      </section>
     
    </Layout>
   
  )
}