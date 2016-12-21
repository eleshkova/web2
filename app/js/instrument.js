'use strict';

 module.exports = class Instrument {
  constructor( name, id) {
    this.name=name;
    this.id = id;
  }
  get info(){
    return `name: ${this.name}`;;
  }
}