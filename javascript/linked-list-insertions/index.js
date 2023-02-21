"use strict";
const LinkedList = require("../linked-list/index");

class Node{
    constructor(value, next = null){
        this.value = value,
        this.next = next; 
    };
};

class LinkedListInsertion extends LinkedList{
    constructor(head){
        this.head = null;
    };

    append(val){
        let current = this.head;
        while(current){
            current = current.next;
        }
        return current.next = val;
    };

    insertBefore(val, newVal){

    };

    insertAfter(val, newVal){

    };
};

module.exports = LinkedListInsertion; 