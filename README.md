# full-stack-practice
Will build a CRUD todo single page application with Node, Express, Angular, and PostgreSQL.

1) Install [Postgres](http://www.enterprisedb.com/crossover-thankyou);

2) npm install pg --save

3) npm install -g express-generator

4) express 'directory-name' ... ex. 'todo'
  - cd 'directory-name'
  - npm install 
  - npm install supervisor
  - npm install pg --save

5) create models/database.js

6) node models/database.js to see log from console !

7) open pgAdmin

8) Servers >> PostgreSQL >> Databases >> Create New Database

9) in database.js edit the connectionString variable/constant to 'postgres://username:password@localhost:5432/todo';
