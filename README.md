# Heir B&B

Get your luxury listing noticed or plan your next adventure now on [Heir B&B](https://heir-b-and-b.herokuapp.com/)!

## [Feature List](https://github.com/BrandonCope/heir-b-and-b/wiki/MVP-Feature-List)

List of features needed for the Minimum Viable Product (MVP) and its CRUD features

## [Database Schema](https://github.com/BrandonCope/heir-b-and-b/wiki/DB-SCHEMA)

Schema of how PostgreSQL database will be set up

## Screenshots

### Home:

![image](https://user-images.githubusercontent.com/69406415/165193203-817901f4-b0ca-4e37-8a3c-4f4f170e4c6b.png)

### Listings Page: 

![image](https://user-images.githubusercontent.com/69406415/165193205-0b826b0f-8f35-4527-8d6c-d65418f88403.png)

### User's Reservations: 

![image](https://user-images.githubusercontent.com/69406415/165193209-b424243f-2309-4079-8107-f1bc5671ed11.png)

**Features**

 - Create/ delete/ edit listings
 - Add/ edit/ delete reviews of listing
 - Create/ edit/ delete/ bookings
 - See lists of your reservations and hosted listings on User Profile

**Technologies Used**

 - React.js
 - JavaScript
 - Express
 - Heroku
 - Node.js
 - PostgreSQL


To use this app complete the following steps:

1. Clone this repo

    * git@github.com:BrandonCope/heir-b-and-b.git

2. Install dependencies in the backend and the frontend directories.

    * npm install

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.

    * CREATE USER <name> WITH CREATEDB PASSWORD <'password'>

4. Create a .env file in the backend directory based on the .env.example found wihtin the directory.

5. Enter your username and password information into your .env file along with your desired database name, a secure combination of charaters for your JWT_SECRET, and your desired PORT (preferably 5000).

6. Add the following proxy to your package.json file with your frontend directory, replacing or keeping the 5000 port to match your PORT configuration in your .env.file.

7. Create Database, Migrate, and Seed models.

    * npx dotenv sequelize db:create
    * npx dotenv sequelize db:migrate
    * npx dotenv sequelize db:seed:all

8. Start the services in the backend directory.

    * npm start

9. Then start the services in the frontend directory. Which should open the project in your default browser. If not, navigate to http://localhost:3000 in your browser.

    * npm start

10. You can use the Demo user or create an account to begin using Heir B&B.
