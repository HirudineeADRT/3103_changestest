let AWS = require('aws-sdk');
const eventBridge = new AWS.EventBridge();
const s3 = new AWS.S3();
var common = require('./add');
var common1 = require('./dir1/add1');
var common2 = require('./dir1/dir2/add2');
var common3 = require('./dir1/dir2/dir3/add3');
var common4 = require('./dir1/dir2/dir3/dir4/add4');

exports.handler = async (event) => {
    common.func1();
    console.log(common);

    try {
        let data = await s3.listObjects({
            Bucket: "hirutest",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };



    return { "message": "Successfully executed " };
};