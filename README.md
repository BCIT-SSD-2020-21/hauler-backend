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
 ## DEPLOYMENT ON HEROKU
 * In order to deploy the backend app on Heroku, you have to follow the below steps:
    <li>First open https://id.heroku.com/login in your browser and signup to create the account first</li>
    <li>Once the account is created, it will send the email verification link to your email which you had signed up.</li>
    <li>Once you have verified the email, set up your own password and login again into Heroku</li>
    <li>After you have successfully logged into Heroku, you have to commit all the changes on VS Code on main/master branch</li>
    <li>Once the commits are done, then run command <strong>"npm i -g heroku"</strong> in your project folder. It will install the heroku CLI for you in order to login into Heroku while the deployment.</li>
    <li>Once the installation is done, then type command <strong>heroku login</strong> and it will take you to the browser for login. Click the Log In button and return back to the command line.</li>
    <li>After that you have to type command <strong>heroku create</strong>, to create the heroku app.</li>
    <li>Now you heroku app is created locally and in order to push that app, run command <strong>git push heroku main/master</strong>. NOTE: main/master should be chose according to the brach you are in.</li>
    <li>Once the command is complete it will give you the https:// link, which will be your link to the backend app deployed.</li>
    <li>Now your backend app is completely deployed on Heroku.!!!!</li>




