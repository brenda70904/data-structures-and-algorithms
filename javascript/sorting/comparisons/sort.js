'use strict';
const { Movies } = require('./movies');

const { mainModule } = require('process');

// need to write the 'callback' compareYear
function sortYear(arr) {
  arr.sort((a, b) => compareYear(a, b));
  return arr;
}


function compareYear(a, b) {
  return b.year - a.year;
}

function sortTitle(arr) {
  arr.sort((a, b) => compareTitle(a, b));
}


function compareTitle(a, b) {
  if(a.title.toLowerCase().includes() )
}

console.log(sortYear(Movies));

module.exports = { sortYear, compareYear, sortTitle, compareTitle };
