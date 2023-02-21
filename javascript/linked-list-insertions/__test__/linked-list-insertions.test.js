"use strict";

const LinkedList = require("../index");

describe("Linked-list insertions",()=>{

    it("can add a node to the end of the linked list ",()=>{
        const linked = new LinkedList();
        
        linked.append(100);

        expect(linked.current.next.value).toEqual(100);
        expect(linked.current.next.next).toBeNull();
    })


});