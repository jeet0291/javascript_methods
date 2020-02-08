var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /** JavaScript call() Method **/
  var obj = {num:2};
  var addToThis = function (a){
    return this.num + a; 
  }
  let result = addToThis.call(obj,3);
  console.log('Call Result:', result); 


  /** JavaScript apply() Method **/
  var applyObj = {num:2};
  var applyToThis = function (a, b, c){
    return this.num + a + b + c;
  }
  let arr = [1,2,3];
  let applyResult = applyToThis.apply(applyObj,arr);
  console.log('Apply Result:', applyResult); 


  /** JavaScript bind() Method **/
  var bindObj = {num:2};
  var bindToThis = function (a, b, c){
    return this.num + a + b + c;
  }
  let bound = bindToThis.bind(bindObj);

  let bindResult = bound(1,2,3);
  console.log('Bind Result:', bindResult); 

  res.render('index', { title: "Call function in Javascript is basically user to call any function with any Object (as a first parameter of function)" });
});

module.exports = router;
