#  Singly Linked List

## Challenge

- create a Node class
- Create a LinkedList class
- Within your LinkedList class, include a head property.

create the following methods

- insert

    - Arguments: value
    - Returns: nothing
    - Adds a new node with that value to the head of the list with an O(1) Time performance.

- includes

    - Arguments: value
    - Returns: Boolean
    - Indicates whether that value exists as a Node’s value somewhere within the list.

- to string
    - Arguments: none
    - Returns: a string representing all the values in the Linked List, formatted as:
        - "{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency
Big O: 
- time : O(1);
- space : O(n);

## API

- insert
    - Arguments: value
    - Returns: nothing
    - Adds a new node with that value to the head of the list with an O(1) Time performance.

- includes
    - Arguments: value
    - Returns: Boolean
    - Indicates whether that value exists as a Node’s value somewhere within the list.

- to string
    - Arguments: none
    - Returns: a string representing all the values in the Linked List, formatted as:
        - "{ a } -> { b } -> { c } -> NULL"


### checklist
- [x] insert method
- [x] include method
- [x] to String method
- [x] Can successfully instantiate an empty linked list
- [x] Can properly insert into the linked list
- [x] The head property will properly point to the first node in the linked list
- [x] Can properly insert multiple nodes into the linked list
- [x] Will return true when finding a value within the linked list that exists
- [x] Will return false when searching for a value in the linked list that does not exist
- [x] Can properly return a collection of all the values that exist in the linked list