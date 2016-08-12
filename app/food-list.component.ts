import { Component, EventEmitter } from "angular2/core";
import { FoodComponent } from "./food.component";
import { Food } from "./food.model";
import { EditFoodComponent } from "./edit-food.component";
import { NewFoodComponent } from "./new-food.component";


@Component ({
  selector: "food-list",
  inputs: ["foodList"],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodComponent, NewFoodComponent],
  template: `
  <div class="container">
  <div class="row">
    <food-display *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)"
    [food]="currentFood" class="col-lg-4">
    </food-display>
  </div>  
    <edit-food *ngIf="selectedFood" [food]="selectedFood">
    </edit-food>
    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(food): void {
    this.foodList.push(new Food(food.name, food.details, food.calories));
  }
}
