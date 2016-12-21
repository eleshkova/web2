'use strict';

module.exports= class Orchestra{
  constructor(type, id){
    this.type=type;
    this.id=id;
  }
  get info(){
    return `тип: ${this.type}`;;
  }
}