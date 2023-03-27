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

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.insert({[key]:value});
    } else {
      let bucket = new LinkedList();
      bucket.insert({[key] : value});
      this.buckets[position] = bucket;
    }
    // Returns: nothing
    // This method should hash the key, and set the key and value pair in the table, handling collisions as needed.

  }

  get(key) {
    // Returns: Value associated with that key in the table
    let position = this.hash(key);
    // note: this doesn't account for collistions
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      // if no linked-list , it's likely jus t bucket.value
      // console.log('##vals',Object.values(bucket.head.val)[0] );
      // console.log('##keys',Object.keys(bucket.head.val)[0] );

      let value = Object.values(bucket.head.val)[0];
      return value;
    }
  }

  has(key) {
    let position = this.hash(key);
    // Returns: Boolean, indicating if the key exists in the table already.
    let result = this.buckets[position] ? true : false;
    return result;
  }

  key() {
    let collection = [];
    for (let i = 0; i < this.buckets.length; i ++ ) {
      if (this.buckets[i]) {
        //console.log(i, this.buckets[i]);
        let current = this.buckets[i].head;
        while (current){
          // console.log('val', current.val);
          collection.push(Object.keys(current.val)[0])
          //collection.push(current.val[0]);
          current = current.next;
        }
          
        }
      }
      return collection;
    }
    
  
}

module.exports = HashTable;

const table = new HashTable(1024);



