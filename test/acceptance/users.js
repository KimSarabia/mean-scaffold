'use strict';

var superagent = require('superagent');

var chai = require('chai');

var app = require(path.join(__dirname, '../../app'));

var path = require('path');

var mongoose = require('mongoose');


before(function(done){
  mongoose.disconnect(function(){
    mongoose.connect(testDBUrl, function(err){
      done(err);
    });
  });
});
