const expect = require('expect');
var Grade = require('../Grade');
var _ = require('underscore');
var grade1;
var grade2;

describe('Grade', function() {

    describe('#isPassing', function() {
  
      it('returns true if grade is passing', function() {
        grade1 = new Grade(0.8);
        expect(grade1.isPassing()).toBe(true);
      });
  
      it('returns false if grade is not passing', function() {
        grade1 = new Grade(0.58);
        expect(grade1.isPassing()).toBe(false);
      })
  
    });
  
  });