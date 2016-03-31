'use strict';

var testDBUrl = 'mongodb://localhost/introtoauth-test';

var path = require('path');
var mongoose = require('mongoose');
var chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var User = require(path.join(__dirname, '../../models/user'));

before(function(done) {
  mongoose.connect(testDBUrl, done);
});

after(function(done){
  mongoose.disconnect(done);
});

describe('User', function() {
  beforeEach(function(done){
    User.remove({}, function(){
      var testUser = { username: 'testNonBinaryIndividual', password: 'passwordtest'};
      User.register(testUser, function(err) {
        done(err);
      });
    });
  });
    describe('.register()', function() {
      it('should register a new user.', function(done) {
      var newUser = {username: "user", password: "password123"};

      User.register(newUser, function(err, createdUser){
            expect(err).to.not.be.ok; //asserting falsiness
            expect(createdUser).to.be.ok; //asserting truthiness
            expect(createdUser.username).to.equal(newUser.username);
            expect(createdUser.password).to.be.null;

            User.findOne({username: newUser.username}, function(err,dbUser){
              expect(err).to.not.be.ok;
              expect(dbUser).to.be.ok;
              expect(dbUser.username).to.equal(newUser.username);
              expect(dbUser.password).to.not.equal(newUser.password);
              expect(dbUser._id).to.be.ok;
              done();
            });
          });
        });

        it('should not register a user -- user already exists', function(done){
          var newUser = {username:'testNonBinaryIndividual', password:'somethingdifferent'};

          User.register(newUser, function(err,createdUser){
            expect(err).to.be.ok; //
            expect(createdUser).to.not.be.ok; //
            done();
          });
        });
      });

        describe('authenticate()', function(){
          it('should properly log in a user', function(done){

            var logInUser = {username:'testNonBinaryIndividual', password:'somethingdifferent'};

            User.authenticate(loginUser, function(err,dbUser){
              expect(err).to.not.exist;
              expect(dbUser.username).to.equal(loginUser.username);
              expect(dbUser.password).to.be.null;
              done();
            });
          });
        });
  });
