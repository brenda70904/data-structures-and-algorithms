'use strict';

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    };
    // lab 05
    insert(value) {
        let current = this.head;
        this.head = new Node(value);
        this.head.next = current;
        this.length++;
        //one line this.head = new Node(value, this.head);
    };

    toString() {
        let current = this.head;
        let text = "";
        while (current) {
            text += `{${current.value}} -> `
            current = current.next;
        }
        return text + "NULL";
    }

    includes(value) {
        let curr = this.head;
        while (curr != null) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
        };
        return false;
    };

    //lab 06
    append(value) {
        let curr = this.head;
        let newNode = new Node(value);
        if (!curr) {
            this.head = newNode;
            return;
        }
        while (curr.next) {
            curr = curr.next;
        }
        this.length++;
        curr.next = new Node(value);
    };

    insertBefore(value, newVal) {
        let curr = this.head;
        let prev = null;
        let newNode = new Node(newVal);
        while (curr.value != value) {
            prev = curr;
            curr = curr.next;
        };
        prev.next = newNode;
        newNode.next = curr;
        this.length++;
    };

    insertAfter(value, newVal) {
        let curr = this.head;
        let next = curr.next;
        let newNode = new Node(newVal);
        while (curr.value != value) {
            curr = curr.next;
            next = curr.next;
        };
        curr.next = newNode;
        newNode.next = next;
        this.length++;
    };

    //lab 07
    kthFromTheEnd(n) {
        let current = this.head;
        // this.head.next = current;
        let position = this.length - n;
        if (position < 0) {
            return "exception";
        }
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current.value;
    };

    zipList(list1, list2) {
        let curr1 = list1.head;
        let curr2 = list2.head;
        let newList = new LinkedList();

        while (curr1 || curr2) {
            if (curr1) {
                newList.append(curr1.value);
                curr1 = curr1.next;
            }
            if (curr2) {
                newList.append(curr2.value);
                curr2 = curr2.next;
            }
        }
        return newList;
    }
};


class Node {
    constructor(value, next = null) {
        this.value = value,
            this.next = next
    };
};

module.exports = LinkedList;
