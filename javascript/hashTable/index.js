'use strict';
const LinkedList = require('../linked-list/index');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    // use the reducer pattern to get that ascii code
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);

    }, 0);
    // multiply asscii sum by the large prime number
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    //hash the key
    let position = this.hash(key);
    //square bracket notation allows me to create an object property dynamically using some variable
    let data = { [key]: value };

    //how to store in a linked-list -
    // use the existed linked-list:
    // does the bucket exist? if it dose, add to the existing bucket
    // if it's does not, create the bucket and add it to the corect postition in the array
    // import exist linked-list method

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.insert(data);
    } else {
      let bucket = new LinkedList();
      bucket.insert(data);
      this.buckets[position] = bucket;
    }
    // Returns: nothing
    // This method should hash the key, and set the key and value pair in the table, handling collisions as needed.

  }

  get(key){
    // Returns: Value associated with that key in the table
    let position = this.hash(key);
    // note: this doesn't account for collistions
    if (this.buckets[position]){
      let bucket = this.buckets[position];
      //if no linked-list , it's likely jus t bucket.value
      let value = bucket.head.value[key];
      return value;
    }
  }

  has(key){
    let position = this.hash(key);
    // Returns: Boolean, indicating if the key exists in the table already.
    let result = this.buckets[position] ? true : false;
    return result;
  }

  key(){
     
  }
}

const table = new HashTable(1024);

const hashOne = table.hash('Brenda');
const hashtwo = table.hash('Judy');
const hashThree = table.hash('Ryan');

// console.log(`hash one: ${hashOne}`, `hash two:${hashtwo}`, `Hash three:${hashThree}`);

// console.log('table: ', table);

table.set('Brenda', 'she/her');
table.set('Judy', 'she/her');
table.set('Ryan', 'he/him');
console.log('tab: ', table);

console.log(table.get('Judy'));
console.log('has:', table.has('Ash'));
console.log('has:', table.has('Brenda'));




// keys
// Returns: Collection of keys

