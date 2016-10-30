var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Muigai Express Baby' });
});

module.exports = router;

const pg = require('pg');
const connstr = require(path.join(__dirname, '../', 'config'));

router.post('/api/v1/todo', function(req, res) {
  // insert / select data
  const result = [];
  const data = {todotitle: req.body.todotitle, complete: false};
  pg.connect(connstr, function(err, client, done) {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    client.query("INSERT INTO todo(todotitle, complete) values($1, $2) ",[data.todotitle, data.complete] );
    const query_res = client.query("SELECT * FROM todo ORDER BY id");
    query_res.on('row', function(row) {
      result.push(row);
    });

    query_res.on('end', function(row) {
      done();
      return res.json(result);
    });

  });
});

// BASH: curl --data "todotitle=Todo1&complete=false" http://localhost:3000/api/v1/todo

route.get('api/v1/todo/', function(req, res) {
  // select data
});

router.put('api/v1/todo/:todo_id', function(req, res) {
  // Update Data
});

router.delete('api/v1/todo/:todo_id', function(req, res) {
  // to delete the data
});
