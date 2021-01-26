import React, { useState } from 'react';

const BlogContainer = ({title, body, isDarkMode}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const shortPost = 140;
  let previewLength = 0;
  let blogLength = 0;
  
  const isShort = () => {
    for (const text in body) {
      blogLength += body[text].length;
    }
    return blogLength < shortPost;
  }
  
  const short = isShort();

  const truncate = (text, isExpanded) => {
    if (previewLength + text.length < shortPost && !isExpanded) {
      previewLength += text.length;
      return [text];
    } else if (previewLength < shortPost && !isExpanded) {
      let truncatedText = text.substring(0, shortPost - previewLength);
      previewLength += truncatedText.length;
      return [truncatedText + "..."];
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
            </div>
          }

          {isExpanded &&
            <div key={element} data-testid={title + "_" + element + "_full"}>
              <p>
                {body[element]}<br/>
              </p>
            </div>
          }

        </div>
      )
    }

    bodyArray.push(
      <div key={title + "_expand"}>
        { !isExpanded && !short &&
          <div style={buttonStyle} data-testid={title + "_open"} onClick={() => {openPost()}}>Read more</div>
        }
        { isExpanded && !short &&
          <div style={buttonStyle} data-testid={title + "_close"} onClick={() => {openPost(title)}}>Read less</div>
        }
      </div>
    )

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