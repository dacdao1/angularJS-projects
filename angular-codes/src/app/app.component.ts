import { Component } from '@angular/core';

function log(target, name, descriptor){
  console.log(target, name,descriptor)
  //wtore the original function in a variable
const original = descriptor. value
  //do some manipulation with descriptor.value
  descriptor.value = function(){
    console.log("this value is hack")

  }
  //return the descriptor
  return descriptor
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'angular-codes';
  constructor(){
    this.aSimpleMethod()
  }
  @log
  aSimpleMethod(){
    console.log("Hey There!")
  }
}
