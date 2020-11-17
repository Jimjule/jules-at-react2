import React from 'react'
import BlogContainer from '../components/BlogContainer'

export default function Home() {
  return(
    <div className="container" id="div-main">
      <BlogContainer title="Hi, I'm Jules" body={["Music Maker,", "Programmer,", "Language Lover.", "Partner of Phroobin.", "Based in London, England."]} />
      <BlogContainer />
      <BlogContainer title="Right Now" body={["I'm stuck indoors.", "I'm collecting my projects to add to this website."]} />
      <BlogContainer />
      <BlogContainer title="What You'll Find Here" body={["This is a place for me to track my thoughts and keep my projects together.", "The idea is to keep things in sight and therefore, in mind."]} />
      <BlogContainer />
      <a href = "#top"><div id ="back-to-top">↑</div></a>
    </div>
  )
}