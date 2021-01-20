import React from 'react'
import BlogContainer from '../components/BlogContainer'

const Music = ({isDarkMode}) => {
  return(
    <div className={`div-main ${isDarkMode ? 'dark' : 'light'}`}>
      <BlogContainer isDarkMode={isDarkMode} title="I'll add music I've made." />
      <BlogContainer isDarkMode={isDarkMode} />
      <BlogContainer isDarkMode={isDarkMode} />
      <BlogContainer isDarkMode={isDarkMode} />
      <BlogContainer isDarkMode={isDarkMode} />
      <BlogContainer isDarkMode={isDarkMode} />
      <a href = "#top"><div id ="back-to-top">↑</div></a>
    </div>
  )
}

export default Music;
