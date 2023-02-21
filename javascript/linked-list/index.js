'use strict';

const { val } = require("cheerio/lib/api/attributes");

class LinkedList {
    constructor() {
        this.head = null;
    };

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

};


class Node {
    constructor(value, next = null) {
        this.value = value,
        this.next = next;
    };
};

module.exports = LinkedList;
