import * as calculator from './calculator';
let assert = require('chai').assert;

describe('Calculator', function(){

  it('should add positive numbers', function(){
    let result = calculator.add(1, 2);
    assert.equal(result, 3)
  });

  it('should add negative numbers', function(){
    let result = calculator.add(-1, -2);
    assert.equal(result, -3)
  });

});

