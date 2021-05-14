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
    MONGO_URI= mongodb+srv://hauler-bcit:<password>@cluster0.hczjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

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
 ##### `/api/:postId` - create one post
 ##### `/api/one/:postId` - 


### `POST`

 ##### `/api/response/service-provider` - create one post by the service provider
 ##### `/api/response/user` - create one response from the user

 ### 'DELETE`

  #### '/api/' - delete all posts
  #### '/api/:postId'  - delete one post
  #### '/api/response/:responseId' - delete one response

<hr />

## For filtering posts

### `GET`

 ##### `/api/user/:uid` - for all posts by user
 ##### '/api/user/location/:uid/:location' - filtering post by user id and location
 ##### '/api/user/service/:uid/:service' - filtering post by user id and services
 
<hr />
 
## For Service Provider

### `GET`

 #### '/api/serviceprovider/:serviceProviderId' - Get service provider by Id
 #### '/api/serviceprovider/location/:serviceProviderId/:location' - Get service provider by location
 #### '/api/serviceprovider/service/:serviceProviderId/:service' - Get service proivder by service
 #### '/api/response/service-provider/:serviceProviderId/:postId' - Get response by service provider Id


#### '/api/' - Get all 

router.get('/', serviceProviderController.getServiceProvider);
router.get('/:uid', serviceProviderController.getOneServiceProvider);
router.post('/', serviceProviderController.createServiceProvider);
router.delete('/:uid', serviceProviderController.deleteOneServiceProvider);
router.post('/:uid', serviceProviderController.updateOneServiceProvider)





## An industry project by:

#### Kulveer Brar
#### Abhishek Pundir
#### Owen Ow
#### Mandeep Dhillon

---





