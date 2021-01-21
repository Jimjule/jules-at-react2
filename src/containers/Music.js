import React from 'react'
import BlogContainer from '../components/BlogContainer'

const Music = ({isDarkMode}) => {
  return(
    <div className={`div-main music ${isDarkMode ? 'dark' : 'light'}`}>
      <BlogContainer isDarkMode={isDarkMode} title="Coming soon." />
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
