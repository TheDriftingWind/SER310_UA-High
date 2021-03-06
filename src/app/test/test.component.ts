import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  a_number : number = 10;
  val_x : number = 5;
  val_y : number = 20;
  disable_btn : boolean = true;
  test3_value : string = '';

  the_text : string = '';

  the_color : string = '';

  newFruit : string = '';
  list = ["apples", "oranges", "bananas", "pear"];

  itemName : string = '';
  items = [{name: 'string'}];

  localRefList : string ='';

  a_function() {
    return this.a_number * 100;
  }

  addNewFruit(){
    this.list.push(this.newFruit);
    this.newFruit = '';
  }

  addItem(){
    this.items.push({name: this.itemName});
    this.itemName = '';
  }

  onItemAdded(data: {itemName: string}){
    console.log(data);
    this.items.push({
      name: data.itemName
    });
  }

  getColor(color){
    if(color != 'red' && color != 'blue' && color != 'yellow'){
      return 'gray'
    } else {
      return color
    }
  }

  addLocalRefValue(inputRef){
    // console.log(inputRef);
    // append the value of the inputRef element as a list iem. this will be displayed by the <ul> element's [innerHtml]
    this.localRefList +=  "<li>" + inputRef.value + "</li>"
  }

  constructor(private route: ActivatedRoute, private router: Router){
    setTimeout(() => {
      this.disable_btn = false;
    }, 5000)
  }

  onGoToTest3(value){
    if(value){
      this.router.navigate(['test3/'+value], {relativeTo: this.route})
    } else{
      this.router.navigate(['test3'], {relativeTo: this.route})
    }
  }

}
