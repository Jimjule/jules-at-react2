import React from 'react'
import BlogContainer from '../components/BlogContainer'

const Projects = ({isDarkMode}) => {
  // console.log(data);
  console.log(isDarkMode);
  
  // const isDarkMode = false;
  
  return(
    <div className={`div-main projects ${isDarkMode ? 'dark' : 'light'}`}>

      <BlogContainer isDarkMode={isDarkMode} title="What I'm up to, and have been up to. Maybe what's coming up too." />
      <BlogContainer isDarkMode={isDarkMode} />
      <BlogContainer isDarkMode={isDarkMode} />
      <BlogContainer isDarkMode={isDarkMode} />
      <BlogContainer isDarkMode={isDarkMode} />
      <BlogContainer isDarkMode={isDarkMode} />
      <a href = "#top"><div id ="back-to-top">↑</div></a>
    </div>
  )
}

export default Projects;
