# Heir B&B

Welcom to Heir B&B to use this app complete the following steps:

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
