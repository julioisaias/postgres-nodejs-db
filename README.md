## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs

---

## Install

    $ git clone git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/project-sandbox-jiglesias
    $ cd PROJECT_TITLE
    $ npm i install

## Requirements

    - Postgres (Version 12.5 or higher).
    - Create a database

## Configure app

Create o edit an `.env` file and put your settings. ( rename `.env.sample` to `.env` ) You will need:

- HOSTNAME=localhost
- PORT=3000
- DATABASE_URL=postgres://postgres:password@localhost:5432/db

## Run SQL scripts in this order:
 - 1 - create-cities.sql
 - 2 - insert-cities.sql
 - 3 - create-accounts.sql

## Running the project

    $ cd PROJECT_TITLE
    $ npm start
