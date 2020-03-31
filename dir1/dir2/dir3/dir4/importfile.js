var common4 = require('./add4');
var common3 = require('../add3');
var common2 = require('../../add2');
var common1 = require('../../../add1');
var common = require('../../../../add');
exports.handler = async (event) => {
    common.func1();
    console.log(common);
    
    return {"message": "Successfully executed"};
};