import React from 'react'
import BlogContainer from '../components/BlogContainer'

export default function Projects() {
  return(
    <div className = "container" id = "div-main">

      <BlogContainer title="What I'm up to, and have been up to. Maybe what's coming up too." />
      <BlogContainer />
      <BlogContainer />
      <BlogContainer />
      <BlogContainer />
      <BlogContainer />
      <a href = "#top"><div id ="back-to-top">↑</div></a>
    </div>
  )
}