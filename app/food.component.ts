import { Component, EventEmitter } from "angular2/core";
import { Food } from "./food.model";


@Component ({
  selector: "food-display",
  inputs: ["food"],
  template: `
    <div class="food-object">
      <h4>{{ food.name }}</h4>
      <h4> {{ food.details }}</h4>
      <h4>{{ food.calories }}</h4>
    </div>
  `
})

export class FoodComponent {
  public food: Food;
}
