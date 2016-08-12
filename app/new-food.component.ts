import { Component, EventEmitter } from "angular2/core";
import { Food } from "./food.model";

@Component ({
  selector: "new-food",
  outputs: ["onSubmitNewFood"],
  template: `
    <h3>Create New Food</h3>
    <div class='food-form'>
      <h4>Name<input placeholder="Name" class="input-lg task-form" #newFoodName></h4>
      <h4>Brand<input placeholder="Brand" class="input-lg task-form" #newFoodBrand></h4>
      <h4>Alcohol Content<input placeholder="AlcoholContent" class="input-lg task-form" #newFoodAlcoholContent><br></h4>
      <h4>Price<input placeholder="Price" class="input-lg task-form" #newFoodPrice></h4>
      <h4><button (click)="addFood(newFoodName, newFoodBrand, newFoodAlcoholContent, newFoodPrice)">Submit</button></h4>
    </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(foodName: HTMLInputElement, foodBrand: HTMLInputElement, alcoholContent: HTMLInputElement, foodPrice: HTMLInputElement) {
    var newFood: Food = new Food(foodName.value, foodBrand.value, parseInt(alcoholContent.value), parseInt(foodPrice.value));
    this.onSubmitNewFood.emit(newFood);
    foodName.value = "";
    foodBrand.value = "";
    alcoholContent.value = "";
    foodPrice.value = "";
  }
}
