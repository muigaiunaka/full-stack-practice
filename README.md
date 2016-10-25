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

10) refresh the table of your new Database in pqAdmin

11) create the config.js file in your directory with this content:

``` javascript
const connectionString = 'postgres://postgres:firew0rks@localhost:5432/todo';
module.exports = connectionString;

```

At this point, database.js should only include this code:
```javascript
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || require(path.join(__dirname, '../', '../', 'config'));

```

After editing the index.js file, install [cURL for Windows](http://www.oracle.com/webfolder/technetwork/tutorials/obe/cloud/objectstorage/restrict_rw_accs_cntainers_REST_API/files/installing_curl_command_line_tool_on_windows.html)
