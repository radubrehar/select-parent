'use strict';

var curry   = require('./curry')
var matches = require('./matches')

module.exports = curry(function(selector, node){
    while (node = node.parentElement){
        if (matches.call(node, selector)){
            return node
        }
    }
})