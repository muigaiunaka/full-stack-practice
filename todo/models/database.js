const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || require(path.join(__dirname, '../', '../', 'config'));

// const connectionString = 'postgres://postgres:firew0rks@localhost:5432/todo';
// const client = new pg.Client(connectionString);
// client.connect();
// console.log('Connection Opened, Hello from your database');
// const query = client.query(
//   'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', () => { client.end(); });
