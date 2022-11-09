const AWS = require('aws-sdk');

module.exports = {
  IAM_USE_KEY: '',
  IAM_USE_SECRET: '',
  BUCKET_NAME: '',
  AWS_REGION: '',

  uploadToS3: function (file, filename, acl = 'public-read') {
    return new Promise((resolve, reject) => {
      let IAM_USE_KEY = this.IAM_USE_KEY;
      let IAM_USE_SECRET = this.IAM_USE_SECRET;
      let BUCKET_NAME = this.BUCKET_NAME;

      let s3bucket = new AWS.S3({
        accessKeyId: IAM_USE_KEY,
        secretAccessKey: IAM_USE_SECRET,
        Bucket: BUCKET_NAME,
      });

      s3bucket.createBucket(function () {
        var params = {
          Bucket: BUCKET_NAME,
          Key: filename,
          Body: file.data,
          ACL: acl,
        };

        s3bucket.upload(params, function (err, data) {
          if (err) {
            console.log(err);
            return resolve({ error: true, message: err });
          }
          console.log(data);
          return resolve({ error: false, message: data });
        });
      });
    });
  },

  deleteFileS3: function (key) {
    return new Promise((resolve, reject) => {
      let IAM_USE_KEY = this.IAM_USE_KEY;
      let IAM_USE_SECRET = this.IAM_USE_SECRET;
      let BUCKET_NAME = this.BUCKET_NAME;

      let s3bucket = new AWS.S3({
        accessKeyId: IAM_USE_KEY,
        secretAccessKey: IAM_USE_SECRET,
        Bucket: BUCKET_NAME,
      });

      s3bucket.createBucket(function () {
        s3bucket.deleteObject(
          {
            Bucket: BUCKET_NAME,
            Key: key,
          },
          function (err, data) {
            if (err) {
              console.log(err);
              return resolve({ error: true, message: err });
            }
            console.log(data);
            return resolve({ error: false, message: data });
          }
        );
      });
    });
  },
};