var assert = require('assert');
// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!

describe('`const` is like `let` plus read-only', () => {

    describe('scalar values are read-only', () => {
  
      it('number', () => {
        const constNum = 0;
        // constNum = 1;
        assert.equal(constNum, 0);
      });
  
      it('string', () => {
        const constString = 'I am a const';
        // constString = 'I am a const';
        assert.equal(constString, 'I am a const');
      });
  
    });
    
    const notChangeable = 23;
  
    it('const scope leaks too', () => {
      assert.equal(notChangeable, 23);
    });
    
    describe('complex types are NOT fully read-only', () => {
  
      it('array', () => {
        const arr = [42, 23];
        arr[0] = 42;
        assert.equal(arr[0], 42);
      });
      
      it('object', () => {
        const obj = {x: 3};
        // obj.x = 2;
        assert.equal(obj.x, 3);
      });
      
    });
  
  });
  