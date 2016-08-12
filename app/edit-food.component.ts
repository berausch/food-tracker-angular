import { Component } from 'angular2/core';
import { Food } from './food.model';


@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
    <h3>Edit Food</h3>
    <div class='food-object'>
      <h4 class='food'>Name<input [(ngModel)]="food.name" class="input-lg task-form"/></h4>
      <h4>Details<input [(ngModel)]="food.details" class="input-lg task-form"/></h4>
      <h4>Calories<input [(ngModel)]="food.calories" class="input-lg task-form"/><br></h4>
    </div>
  `
})

export class EditFoodComponent {
  public food: Food;
}
