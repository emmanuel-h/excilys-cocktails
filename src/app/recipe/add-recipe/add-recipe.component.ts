import {Component, OnChanges, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../ingredient.model';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe;

  recipeForm = new FormGroup({
    name: new FormControl(),
    url: new FormControl(),
    description: new FormControl()
  });

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.recipe = new Recipe();
    this.recipeForm = this.formbuilder.group({
      name: ['', Validators.required],
      url: '',
      description: ''
    });
  }

  saveRecipe() {

    this.recipe = new Recipe();
    this.recipe.id = 0;

    this.recipe.name = this.recipeForm.value.name as string;
    this.recipe.picture = this.recipeForm.value.url as string;
    this.recipe.description = this.recipeForm.value.description as string;

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
