 import { Component, EventEmitter } from "angular2/core";
 import { FoodListComponent } from "./food-list.component";
 import { Food } from "./food.model";

 @Component ({
   selector: "my-app",
   directives: [FoodListComponent],
   template: `
    <div class="container">
      <h1 id="page-title">Food Tracker</h1>
        <food-list [foodList]="foods">
        </food-list>
    </div>
   `
 })

 export class AppComponent {
   public foods: Food[];
   constructor() {
     this.foods = [
       new Food("Grilled Chicken sandwich", "From new Cookbook!", 600),
       new Food("Carrot Sticks", "10 of them", 50),
       new Food("Diet Snapple", "1 bottle", 4),
     ];
   }
 }
