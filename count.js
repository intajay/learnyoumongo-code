 var mongo = require('mongodb').MongoClient;

 var url = 'mongodb://localhost:27017/data';

 mongo.connect(url, function(err, db) {
 	var parrots = db.collection('parrots');
 	parrots.remove();

 	parrots.insert([{
 		species: "Macaws",
 		age: 75
 	}, {
 		species: "Cockatoos",
 		age: 40
 	}, {
 		species: "Amazons",
 		age: 55
 	}, {
 		species: "Eclectus",
 		age: 65
 	}, {
 		species: "Lovebirds",
 		age: 20
 	}]);

 	parrots.count({
 		age: {
 			$gt: parseInt(process.argv[2])
 		}
 	}, function(err, count) {
 		console.log(count);
 	});

 	db.close();
 });