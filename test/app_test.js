const assert = require('chai').assert;
const app = require('../app');

  describe('test 1', ()=>{
    it('app should return hello', ()=>{
      assert.equal(app.sayHello(), 'hello');
    });
    it('bigger than 5', ()=>{
      assert.isAbove(app.addNumber(2, 5), 5);
    });
  })

  describe('test 2', ()=>{
    it('app should return hello', ()=>{
      assert.equal(app.sayHello(), 'hello');
    });
    it('bigger than 5', ()=>{
      assert.isAbove(app.addNumber(0, 5), 5);
    });
  })
