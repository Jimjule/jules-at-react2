import React, { useState } from 'react';

const BlogContainer = ({title, body, short, isDarkMode}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const shortPost = 120;

  const truncate = (text, isExpanded) => {
    if(text.length > shortPost && !isExpanded) {
      return [text.substring(0, shortPost) + "..."]
    } else {
      return [text]
    }
  }

  const openPost = () => {
    setIsExpanded(!isExpanded);
  }

  const populateBody = () => {
    let bodyArray = [];

    for (const element in body) {
      bodyArray.push(
        <div key={title + "_" + element + '_container'} data-testid={title + "_" + element + "_container"}>

          {!isExpanded && 
            <div key={element} data-testid={title + "_" + element + "_preview"}>
              <p>
                {truncate(body[element], isExpanded)}<br/>
              </p>
              { body[element].length > shortPost &&
                <div style={buttonStyle} data-testid={title + "_open"} onClick={() => {openPost()}}>Read more</div>
              }
            </div>
          }

          {isExpanded &&
            <div key={element} data-testid={title + "_" + element + "_full"}>
              <p>
                {body[element]}<br/>
              </p>
              { !short &&
                <div style={buttonStyle} data-testid={title + "_close"} onClick={() => {openPost(title)}}>Read less</div>
              }
            </div>
          }

        </div>
      )
    }

    return(
      bodyArray
    )
  }

  return (
    <div data-testid={title} className={`mainContainer ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>{title}</h2>
        { populateBody() }
    </div>
  )
}

const buttonStyle = {
  color: 'grey'
}

export default BlogContainer;