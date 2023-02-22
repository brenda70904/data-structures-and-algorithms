'use strict';

const { val } = require("cheerio/lib/api/attributes");

class LinkedList {
    constructor() {
        this.head = null;
    };
    // lab 05
    insert(value) {
        let current = this.head;
        this.head = new Node(value);
        this.head.next = current;
        //one line this.head = new Node(value, this.head);
    };

    toString() {
        let current = this.head;
        let text = "";
        while (current) {
            text += ` { ${current.value} } -> `
            current = current.next;
        }
        return text + "NULL";
    }

    includes(value) {
        let curr = this.head;
        while (curr.value != null) {
            if (curr.value === value) {
                return true;
            } else {
                return false;
            }
            curr = curr.next;
        };
    };

    //lab 06
    append(val) {
        let current = this.head;
        while (current) {
            current = current.next;
        }
        return current.next = val;
    };

    insertBefore(val, newVal) {
        let curr = this.head;
        let prev = null;
        while (curr != val) {
            prev = curr;
            curr = curr.next;
        };
        perv.next = newVal;
        newVal.next = curr;

    };

    insertAfter(val, newVal) {
        let curr = this.head;
        while (curr != val) {
            curr = curr.next;
        };
        newVal = curr.next;
        curr.next = newVal;
    };

    //lab 07
    kthFromTheEnd(n) {
        let current = this.head;
        // this.head.next = current;
        let position = this.length - n;
        if (position < 0) {
            return "exception";
        }
        for (let i = 0; i <= position; i++) {
            current = current.next;
        }
        return current.value;
    };
};


class Node {
    constructor(value, next = null) {
        this.value = value,
        this.next = next
    };
};

module.exports = LinkedList;
