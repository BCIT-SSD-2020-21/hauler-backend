const aws = require('aws-sdk')
const crypto = require('crypto')
const util = require('util')

const randomBytes = util.promisify(crypto.randomBytes)

require('dotenv').config();

const region = "us-west-2 "
const bucketName = "hauler-bcit-ssd"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})


const generateUploadURL = async (req, res) => {
  try {
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex')

    const params = ({
      Bucket: bucketName,
      Key: imageName,
      Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    console.log(uploadURL)
    return uploadURL
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
}

exports.generateUploadURL = generateUploadURL;