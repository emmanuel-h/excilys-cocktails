import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  @Input()
  recipe: Recipe;

  @Output()
  updateRecipes: EventEmitter<Recipe> = new EventEmitter();

  constructor(private recipeService: RecipeService){}

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id).subscribe(() => {
      this.updateRecipes.emit(this.recipe);
    });
  }

}
