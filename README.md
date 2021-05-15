## Hauler-Mobile App Backend
The back-end of the hauler app handles the database for both the apps, user and service provider. The database is created in MongoDb and also is stored on the cloud via MongoAtlas.

## Installation requirements

### dependancies required to be installed
- npm install mongoose, cors, express and body-parser

### Currently the database on MongoDb is hosted on their shared cluster plan (free).
- A dot env file will have to be created at the root to store the below Url and add the databse cluster password.
    MONGO_URI= mongodb+srv://hauler:<password>@clusterhauler.v3kve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

---
## Team Members

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

---
## EndPoints

### For User
#### To get all users: 
_/api/users_   
#### To create new user: 
_/api/users_ 
#### To get one user by id: 
_/api/users/:uid_ 
#### To delete user: 
_/api/users/:uid_   
#### To edit user profile: 
_/api/users/:uid_   

### For Service Provider
#### To get all service Provider: 
_/api/service-providers_
#### To get one service Provider by id:
 _/api/service-providers/:uid_
#### To create new service Provider: 
_/api/service-providers_
#### To delete one service Provider: 
_/api/service-providers/:uid_
#### To edit service Provider Profile: 
_/api/service-providers/:uid_

### For Posts
#### To get all posts:
_/api/posts_

#### To get all posts:
_/api/posts_

#### To get all active posts:
_/api/posts/all_

#### To get active posts for specific location:
_/api/posts/location/:location_

#### To get active posts for specific service:
_/api/posts/service/:service_

#### To get one post by id:
_/api/posts/one/:postId_

#### To get all posts posted by specific user: 
_/api/posts/user/:uid_

#### To get all post by specific user and specific location:
_/api/posts/user/location/:uid/:location_

#### To get all post by specific user and specific service:
_/api/posts/user/service/:uid/:service_

#### To get all posts service provider responded to:
_/api/posts/serviceprovider/:serviceProviderId_

#### To get all posts service provider responded to for specific location:
_/api/posts/serviceprovider/location/:serviceProviderId/:location_

#### To get all posts service provider responded to for specific service:
_/api/posts/serviceprovider/service/:serviceProviderId/:service_

#### To create new Post:
_/api/posts_

#### To delete one post:
_/api/posts/:postId_

#### To edit post:
_/api/posts/:postId_

#### To update post visiblity when post gets accepted:
_/api/posts/one/:postId_

#### To add service provider response:
_/api/posts/response/service-provider_

#### To add user response:
_/api/posts/response/user_

#### To get response by service provider id on specific post:
_/api/posts/response/service-provider/:serviceProviderId/:postId_

#### To delete response:
_/api/posts/response/:responseId_





