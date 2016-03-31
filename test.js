'use strict';

var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1,2,3].indexOf(5),-1);
      assert.equal([1,2,3].indexOf(0),-1);
    });
    it('should return the correct index when the value is present', function () {
      assert.equal([1,2,3].indexOf(2),1);
      assert.equal(['1','2','3'].indexOf('3'),2);
    });
  });
});


describe('JSON', function(){
  describe('.parse()', function(){

    before(function(done){
      console.log('before!!');
    });

    after(function(){
      console.log('after!!');
    });

    beforeEach(function(done){
      console.log('beforeEach!!');
      //do async stuff
      setTimeout(function(){
        done();
      }, 100)
    });

    afterEach(function(){
      console.log('afterEach!!');
    });


    it('should return the object represented by a JSON string', function(){

      var str = '{"color":"blue", "number":5}';

      assert.deepStrictEqual(JSON.parse(str), {color:'blue', number:3});

      it('should ERROR when an invalid string is given', function(){
      assert.throws(function() {
        JSON.parse('[');
      });
      assert.throws(function() {
        JSON.parse("{'hey':'there'}");
      });
      assert.throws(function(){
        JSON.parse('[1,2,]');
      });
    });
  });
});
});
