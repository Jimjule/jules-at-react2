import React, { useState } from 'react';

const BlogContainer = ({title, body, short, isDarkMode}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const truncate = (text, isExpanded) => {
    if(text.length > 120 && !isExpanded) {
      return [text.substring(0, 120) + "..."]
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
        <div key={element + '_container'}>
          {!isExpanded && 
            <div key={element} data-testid={title + "_" + element + "_preview"}>
              {truncate(body[element], isExpanded)}<br/><br/>
              { body[element].length > 120 &&
                <div style={buttonStyle} data-testid={title + "_open"} onClick={() => {openPost()}}>Read more</div>
              }
            </div>
          }
          {isExpanded &&
            <div key={element} data-testid={title + "_" + element + "_full"}>
              {body[element]}<br/><br/>
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
      <p>
        { populateBody() }
      </p>
    </div>
  )
}

const buttonStyle = {
  color: 'grey'
}

export default BlogContainer;