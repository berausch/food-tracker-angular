import { Component, EventEmitter } from "angular2/core";
import { FoodComponent } from "./food.component";
import { Food } from "./food.model";
import { EditFoodComponent } from "./edit-food.component";
import { NewFoodComponent } from "./new-food.component";
import { CaloriesHighLowPipe } from "./calorieshighlow.pipe";


@Component ({
  selector: "food-list",
  inputs: ["foodList"],
  outputs: ['onFoodSelect'],
  pipes: [CaloriesHighLowPipe],
  directives: [FoodComponent, EditFoodComponent, NewFoodComponent],
  template: `
  <div class="container">
    <div class="title-area">
      <select class="title-area" (change)="onChange($event.target.value)">
        <option value="all"  selected="selected">Show All</option>
        <option value="low">Show Low Calories</option>
        <option value="high">Show High Calories</option>
      </select>
    </div>
    <div class="row">
      <food-display *ngFor="#currentFood of foodList | calorieshighlow:selectedCalories"
      (click)="foodClicked(currentFood)"
      [food]="currentFood" class="col-lg-4">
      </food-display>
    </div>
    <div class="row">
    <br>
    <br>
      <new-food (onSubmitNewFood)="createFood($event)"></new-food>
      <edit-food *ngIf="selectedFood" [food]="selectedFood">
      </edit-food>
      </div>
  </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public selectedCalories: string = "all";
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
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
}
