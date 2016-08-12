import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';


@Pipe ({
  name: "calories-high-low",
  pure: false
})

export class CaloriesHighLowPipe implements PipeTransform {
  transform(input: Food[], info) {
    var output: Food[] = [];
    var highLowCalories = info[0];
    if(highLowCalories === "high"){
      for(var i = 0; i<input.length; i++) {
        if(input[i].calories >= 500) {
          output.push(input[i]);
          }
        }
        return output;
    } else if(highLowCalories === "low"){
      for(var i = 0; i<input.length; i++) {
        if(input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    }  else {
      return input;
    }
  }
}
