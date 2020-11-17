import React from 'react'

// var aws = require('aws-sdk');
//
// // var config = require('../../config/environment/' + process.env.NODE_ENV); // require your config file
//
// var config = require('../config');
//
// var s3 = new aws.S3({ accessKeyId: config.AWS_ID, secretAccessKey: config.AWS_KEY }); //create a s3 Object with s3 User ID and Key
//
// var getParams = {
//   Bucket: 'jules.at',
//   Key: 'photos/jules1.jpeg'
// }
//
// //Fetch or read data from aws s3
// s3.getObject(getParams, function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     data.Body.toString();
//   }
// })


// // //

var params = {
  Bucket: "jules.at",
  // Key: "photos/*"
};

// s3.listObjectsV2(params, function (err, data) {
//   // console.log('We are here')
//   if (err) console.log(err, err.stack);
//   else console.log(data);
// })


const Blog = (data) => {
  
  const truncate = (text) => {
    if(text.length > 120) {
      return [text.substring(0, 120) + "..."]
    } else {
      return [text]
    }
  }

  const populateBlogPosts = () => {
    let blogArray = [];
    for (const post in data.blogs) {
      blogArray.push(
        <BlogContainer title={data.blogs[post].title} body={truncate(data.blogs[post].body[0])} />
      )
    }
    return blogArray;
  }

  return(
      <div className = "container" id = "div-main">
        <BlogContainer title={["I'll add a blog soon.", "Maybe with photos."]} />
        <div className={'mainContainer'}>
          <img id={'mainPic'} src={'https://s3-eu-west-1.amazonaws.com/jules.at/photos/jules1.jpeg'}/>
        </div>
        {
          populateBlogPosts()
        }
        {/* { blogJSON.map(post => (
          <BlogContainer title={blogJSON[post].title} body={blogJSON[post].body} />
        ))} */}
        <BlogContainer />
        <BlogContainer />
        <a href = "#top"><div id ="back-to-top">↑</div></a>
      </div>
  )
}

export default Blog;