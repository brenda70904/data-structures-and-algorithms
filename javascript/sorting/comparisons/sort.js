'use strict';

const { mainModule } = require('process');

// need to write the 'callback' compareYear
function sortYear(arr) {
  return arr.sort(compareYear);
}


function compareYear(a, b) {
  return b.year - a.year;
}

function sortTitle(arr) {
  return arr.sort(compareTitle);
}


function compareTitle(a, b) {

  if(a.title.startsWith('The')) a.title.slice(4);
  if(a.title.startsWith('An')) a.title.slice(3);
  if(a.title.startsWith('A')) a.title.slice(2);
  if(b.title.startsWith('The')) b.title = b.title.slice(4);
  if(b.title.startsWith('An')) b.title = b.title.slice(3);
  if(b.title.startsWith('A')) b.title = b.title.slice(2);

  return a.title > b.title ? 1 : -1 ;
}

// console.log(sortTitle(Movies));
module.exports = { sortYear, compareYear, sortTitle, compareTitle };
