import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from './recipe.model';
import {isNullOrUndefined} from 'util';

@Pipe({
  name : 'sortRecipes'
})

export class SortPipe implements PipeTransform {
  transform(array: Recipe[]): Recipe[] {
    if (isNullOrUndefined(array)) {
      return array;
    }
    array.sort((a: Recipe, b: Recipe) => {
      if (!isNullOrUndefined(a.name) && !isNullOrUndefined(b.name)) {
        return a.name.localeCompare(b.name);
      }
    });
    return array;
  }
}
