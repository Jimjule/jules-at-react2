import React from 'react';

const BlogContainer = ({title, body}) => {

  const populateBody = () => {
    let bodyArray = [];

    for (const element in body) {
      bodyArray.push(
        <div key={element} data-testid={title + "_" + element}>
          {body[element]}<br/><br/>
        </div>
      )
    }

    return(
      bodyArray
    )
  }

  return (
    <div style={blogStyle} data-testid={title}>
      <h2>{title}</h2>
      <p>
        { populateBody() }
      </p>
    </div>
  )
}

const blogStyle = {
  position: 'relative',
  padding: '3vw',
  left: '10vw',
  height: '30vw',
  width: '30vw',
  borderStyle: 'solid none none none',
  borderColor: 'black',
  borderWidth: '2px'
}

export default BlogContainer;