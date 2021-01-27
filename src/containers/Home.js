import React from 'react'
import BlogContainer from '../components/BlogContainer'

const Home = ({isDarkMode}) => {
  
  return(
    <div className={`div-main home ${isDarkMode ? 'dark' : 'light'}`}>
      <BlogContainer isDarkMode={isDarkMode} title="Hi, I'm Jules" body={["Music Maker,", "Programmer,", "Language Lover.", "Based in London, England."]} />
      <BlogContainer isDarkMode={isDarkMode} />
      <BlogContainer isDarkMode={isDarkMode} title="Right Now" body={["I'm stuck indoors.", "I'm finishing my website!", "I'm collecting my projects to add to this website."]} />
      <BlogContainer isDarkMode={isDarkMode} />
      <BlogContainer isDarkMode={isDarkMode} title="What You'll Find Here" body={["This is a place for me to track my thoughts and keep my projects together.", "The idea is to keep things in sight and therefore, in mind."]} />
      <BlogContainer isDarkMode={isDarkMode} title="About this Website" body={["Programmed in React.", "Tested with Cypress and Jest.", "Hosted on AWS."]} />
      <a href = "#top"><div id ="back-to-top">↑</div></a>
    </div>
  )
}

export default Home;