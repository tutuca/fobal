module.exports = function (grunt) {
    var React = require('React'),
        $ = require('jquery');


    React.render(<h1>Hello World</h1>, document.body);

};
$(function(){
    alert('hellp')
})