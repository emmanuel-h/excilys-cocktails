import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../ingredient.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipe = new Recipe();
  }

  saveRecipe() {
    this.recipe = new Recipe();
    this.recipe.id = 0;
    const ingredient = new Ingredient();
    ingredient.ingredientId = 1;
    ingredient.name = 'Dark rum (Appleton Estate Reserve)';
    ingredient.quantity = 0;
    ingredient.unit = 'oz';
    this.recipe.ingredients = [];
    this.recipe.ingredients.push(ingredient);
    this.recipeService.saveRecipe(this.recipe).subscribe( data => {
      this.router.navigate(['/recipes']);
    });
  }

}
