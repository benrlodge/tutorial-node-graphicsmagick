var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {
	  status: 'Ready for upload',
	  newImage: 'http://placehold.it/175x175'
	});
});

module.exports = router;
