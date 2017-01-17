 var mongo = require('mongodb').MongoClient;

 var url = 'mongodb://localhost:27017/data';

 mongo.connect(url, function(err, db) {
 	var user = db.collection('user');
 	user.remove();

 	user.insert({
 		name: "Tina",
 		age: 30,
 		username: "tinatime"
 	});

 	user.update({}, {
 		$set: {
 			age: 40
 		}
 	}, function(err, data) {
 		console.log(JSON.stringify(data));
 	});

 	user.find({}).toArray(function(err, user) {
 		console.log(user);
 	});

 	db.close();
 });