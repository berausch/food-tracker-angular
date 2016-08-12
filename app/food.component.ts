import { Component, EventEmitter } from "angular2/core";
import { Food } from "./food.model";


@Component ({
  selector: "food-display",
  inputs: ["food"],
  template: `
    <div class="food-object">
      <h4>Name: {{ food.name }}</h4>
      <h4>Details:  {{ food.details }}</h4>
      <h4>Calories: {{ food.calories }}</h4>
    </div>
  `
})

export class FoodComponent {
  public food: Food;
}
