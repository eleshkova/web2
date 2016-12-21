'use strict';
let instrument=require('./instrument.js');
let orchestra=require('./orchestra.js');

module.exports= class Musician{
  constructor(orchestra, instrument, name, experience, id){
    this.orchestra=orchestra;
    this.instrument=instrument;
    this.experience=experience;
    this.name=name;
    this.id=id;
  }
  get info(){
    return `name: ${this.name}, instrument: ${this.instrument.name}, orchestra: ${this.orchestra.type}, experience: ${this.experience}`;;
  }
}