'use strict';

var gm = require('gm').subClass({ imageMagick: true });

function ModifyAndUpload(img, callback){
  this.img = img;
  this.callback = callback;
  this.init();
}

ModifyAndUpload.prototype = {

  modifyImage: function(){
    var that = this;
    gm(that.originalImagePath)
      .resize(175, 175 + '^')
      .gravity('center')
      .extent(175, 175)
      .write(that.newThumbPath, function (err){
        if (that.callback && typeof(that.callback) === 'function'){
          that.callback(err, that.publicPathOfThumb);
        }
      }); 
  },


  init: function(){
    var saveFolder = process.cwd() + '/public/images/finished/';
    this.originalImagePath = process.cwd() + '/' + this.img.path;
    this.newThumbPath = saveFolder + 'thumb--' + this.img.originalname;
    this.publicPathOfThumb = '/images/finished/thumb--' + this.img.originalname;    
    this.modifyImage();
  }

};

module.exports = ModifyAndUpload;