import { Component } from 'angular2/core';
import { Food } from './food.model';


@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
    <div class='food-edit col-lg-6'>
    <h3>Edit Food</h3>
    <br>
    <h4>Name<br><input [(ngModel)]="food.name" class="input-lg task-form"/></h4>
    <h4>Details<br><input [(ngModel)]="food.details" class="input-lg task-form"/></h4>
    <h4>Calories<br><input [(ngModel)]="food.calories" class="input-lg task-form"/><br></h4>
    </div>
  `
})

export class EditFoodComponent {
  public food: Food;
}
