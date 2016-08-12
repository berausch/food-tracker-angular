import { Component, EventEmitter } from "angular2/core";
import { Food } from "./food.model";

@Component ({
  selector: "new-food",
  outputs: ["onSubmitNewFood"],
  template: `
    <h3>Create New Food</h3>
    <div class='food-form'>
      <h4>Name<input placeholder="Name" class="input-lg task-form" #newFoodName></h4>
      <h4>Details<input placeholder="Details" class="input-lg task-form" #newFoodDetails></h4>
      <h4>Calories: <input placeholder="Calories" class="input-lg task-form" #newFoodCalories><br></h4>
      <h4><button (click)="addFood(newFoodName, newFoodDetails, newFoodCalories)">Submit</button></h4>
    </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(foodName: HTMLInputElement, foodDetails: HTMLInputElement, foodCalories: HTMLInputElement) {
    var newFood: Food = new Food(foodName.value, foodDetails.value, parseInt(foodCalories.value));
    this.onSubmitNewFood.emit(newFood);
    foodName.value = "";
    foodDetails.value = "";
    foodCalories.value = "";
  }
}
