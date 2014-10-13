'use strict';

var express = require('express');
var router = express.Router();
var MAU = require('./modify-and-upload');

router.post('/', function(req, res) {
  var mau = new MAU(req.files.image, function(err, newImagePath){
    if(err){ res.render('index', { 
      status: 'Error uploading' }); 
    }
    res.render('index', {
      status: 'Finished uploading',
      newImage: newImagePath
    });
  });
});


module.exports = router;