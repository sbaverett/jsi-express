var express = require('express');
var app = express();

app.use(require('morgan')('dev'));
app.use(require('body-parser')());
app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));


var people = {};

app.post('/api/people', function(req, res) {
  var id = people.length + 1;
  var person = {
    id: 1,
    name: req.param('name')
  };
  people[id] = person;
  res.json({ person: person });
});
// app.get('/api/people', function(req, res){
//   var id = req.param.uid;
//      file = person;
//        var person = {
//     		id: 1,
//     		name: req.param('name')
//   		};
//   		people[id] = person;
//   		res.json({ person: person });
// 	});
//   req.user.mayViewFilesFrom(uid, function(yes){
//     if (yes) {
//       res.sendfile(file);
//     } else {
//       res.send(403, 'Sorry! you cant see that.');
//     }
//   });
// });

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port %d', server.address().port);
});
