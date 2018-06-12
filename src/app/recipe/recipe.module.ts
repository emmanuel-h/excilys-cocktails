import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeComponent} from './recipe.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {StrToArrayPipe} from './str-to-array.pipe';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {RouterModule} from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  declarations: [
    RecipeComponent,
    RecipesComponent,
    StrToArrayPipe,
    RecipeDetailComponent,
    AddRecipeComponent]
})
export class RecipeModule { }
