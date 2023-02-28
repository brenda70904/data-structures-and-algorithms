"use strict";

const { Queue } = require("./index")

class AnimalShelter {
  constructor() {
    this.catQ = new Queue();
    this.dogQ = new Queue();
  };

  enqueue(animal) {
    if (animal.species === "cat") {
      this.catQ.enqueue(animal);
    } else if (animal.species === "dog") {
      this.dogQ.enqueue(animal);
    } else return null;
  };

  dequeue(pref) {
    if (pref === "cat") {
      return this.catQ.dequeue();
    } else if (pref === "dog") {
      return this.dogQ.dequeue();
    }else return null;
  };
}

module.exports = AnimalShelter;