import React from 'react'
import BlogContainer from '../components/BlogContainer'

export default function Music() {
  return(
    <div className = "container" id = "div-main">
      <BlogContainer title="I'll add music I've made." />
      <BlogContainer />
      <BlogContainer />
      <BlogContainer />
      <BlogContainer />
      <BlogContainer />
      <a href = "#top"><div id ="back-to-top">↑</div></a>
    </div>
  )
}