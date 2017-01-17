 var mongo = require('mongodb').MongoClient;

 var url = 'mongodb://localhost:27017/data';

 mongo.connect(url, function(err, db) {
 	var user = db.collection('user');
 	user.remove();

 	var obj = {
 		firstName: process.argv[2],
 		lastName: process.argv[3]
 	};

 	user.insert(obj, function(err, data) {
 		console.log(JSON.stringify(data));
 	});

 	db.close();
 });