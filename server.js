var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.redirect('/home/');
});
app.use(require('morgan')('dev'));
app.use(require('body-parser')());
app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));


var people = {
  1: { id: 1, name: 'Adam' },
  2: { id: 2, name: 'Ariel' },
  3: { id: 3, name: 'Sam' },
  4: { id: 4, name: 'Grant' }
};

// app.delete("/api/people/:id", function(req, res) {
// 	console.log(people[req.params.id];
// 		res.json({ status: deleted ? 'deleted' ok}))
// })

app.get('/api/people/:id', function(req, res) {
	var person = people[req.params.id];
	console.log(person);
	
})

app.post('/api/people', function(req, res) {
  var id = people.length + 1;
  var person = {
    id: 1,
    name: req.param('name')
  };
  people[id] = person;
  res.json({ person: person });
});

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port %d', server.address().port);
});
