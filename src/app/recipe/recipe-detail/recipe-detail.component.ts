import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe: Recipe;

  displayIngredients: boolean;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
    this.displayIngredients = false;
  }

  expand() {
    this.displayIngredients = !this.displayIngredients;

  }

}
