1. npm init
2. npm install mocha chai --save-dev
3. package.json의 test 코드 'mocha'로 변경
4. module.exports({
    func1 : ()=>{},
    func2 : ()=>{},
    ...
})
5. test 폴더 만들고 app_test.js 파일 만든 뒤 최상단에
    const assert = require('chai').assert;
   추가


6. describe 함수 : 총 test

  describe('test 1', ()=>{
    it('test 내용에 대한 설명', ()=>{
      assert.equal(test 함수(), '함수의 예상 return 값');
    });

    // 하나의 describe 함수 내에서 여러 개의 it 함수를 사용하여 여러 요건을 테스트해볼 수 있다.

    it('bigger than 5', ()=>{
      assert.isAbove(app.addNumber(2, 5), 5);
    });


  })
