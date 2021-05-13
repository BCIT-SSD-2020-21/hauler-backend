## Hauler-Mobile App Backend
The back-end of the hauler app handles the database for both the apps, user and service provider. The database is created in MongoDb and also is stored on the cloud via MongoAtlas.

## Installation requirements

#### Prerequisites
- Node 12 LTS or higher
- Node Package Manager (NPM) or Yarn

### Installation
- Clone the repo
- npm install or yarn install
- npm start or yarn start
- add .env file to the root folder (Sample for .env file created in the repo for refernce)
- A dot env file will have to be created at the root to store the below Url and add the databse cluster password.
    MONGO_URI= mongodb+srv://hauler:<password>@clusterhauler.v3kve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

<hr />

# Endpoints from MongoDb database

## For posts added by the user

### `GET`

 ##### `/api/posts/all` - for all posts
 ##### `/api/posts/location/:location` - for posts by locations
 ##### `/api/posts/service/:service` - for all services
 ##### `/api/posts/one/:postId` - for one post


### `POST`

 ##### `/api/`
 ##### `/api/:postId`
 ##### `/api/one/:postId`


### `POST`

 ##### `/api/response/service-provider`
 ##### `/api/response/user` 

<hr />



.delete ('/', postController.deleteAll)
.delete('/:postId', postController.deleteOnePost);
.delete('/response/:responseId', postController.deleteResponse) 

.get('/user/:uid', postController.getPostsByUid)
.get('/user/location/:uid/:location', postController.getPostsByIdAndLocation)
.get('/user/service/:uid/:service', postController.getPostsByIdAndService)

.get('/serviceprovider/:serviceProviderId', postController.getPostsByServiceProviderId)
.get('/serviceprovider/location/:serviceProviderId/:location', postController.getPostsByServiceProviderIdAndLocation)
.get('/serviceprovider/service/:serviceProviderId/:service', postController.getPostsByServiceProviderAndService)
.get('/response/service-provider/:serviceProviderId/:postId', postController.getResponseByServiseProviderId)


## Team Members

#### Kulveer Brar
#### Abhishek Pundir
#### Owen Ow
#### Mandeep Dhillon

---





