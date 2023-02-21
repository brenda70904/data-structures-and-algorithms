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
        let curr = this.head;
        let prev = null;
        while(curr != val){
            prev = curr;
            curr = curr.next;
        };
        perv.next = newVal;
        newVal.next = curr;
        
    };

    insertAfter(val, newVal){
        let curr = this.head;
        while(curr != val){
            curr = curr.next;
        };
        newVal = curr.next;
        curr.next = newVal;
    };
};

module.exports = LinkedListInsertion; 