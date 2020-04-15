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


export default function Blog() {
  return(
    <div className = "container" id = "div-main">

      <div id = "main1">
        <h2>Blog</h2>
        <p>I'll add a blog soon.<br></br><br></br>Maybe with photos.</p>
      </div>
        <div id = "main1a">
          {/*<img src={s3}></img>*/}
        </div>
        <div id = "main2">
        </div>
        <div id = "main2a">
        </div>
        <div id = "main3">
        </div>
        <div id = "main3a">
        </div>
        <a href = "#top"><div id ="back-to-top">↑</div></a>
    </div>
  )
}