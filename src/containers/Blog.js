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


const Blog = ({blogs, isDarkMode}) => {
  const populateBlogPosts = () => {
    let blogArray = [];
    for (const post in blogs) {
      blogArray.push(
        <BlogContainer isDarkMode={isDarkMode} data-testid={blogs[post].title} key={blogs[post].title + "_" + post} title={blogs[post].title} body={[blogs[post].body[0]]} />
      )
    }
    return blogArray;
  }

  return(
      <div className={`div-main blog ${isDarkMode ? 'dark' : 'light'}`}>
        <BlogContainer isDarkMode={isDarkMode} title={["I'll add a blog soon.", "Maybe with photos."]} />
        <div className={`mainContainer ${isDarkMode ? 'dark' : 'light'}`}>
          <img className={'mainPic'} src={'https://s3-eu-west-1.amazonaws.com/jules.at/photos/jules1.jpeg'}/>
        </div>
        {
          populateBlogPosts()
        }
        <BlogContainer isDarkMode={isDarkMode}/>
        <BlogContainer isDarkMode={isDarkMode}/>
        <a href = "#top"><div id ="back-to-top">↑</div></a>
      </div>
  )
}

export default Blog;
