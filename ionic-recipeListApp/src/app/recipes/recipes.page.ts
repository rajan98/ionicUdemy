import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ionViewWillEnter(){
    console.log("ionViewWillEnter of recipesl");
    this.recipes = this.recipesService.getAllRecipes();
  }
  ionViewDidEnter(){
    console.log("ionViewDidlnter of recipesl");
  }
  ionViewWillLeave(){
    console.log("ionViewWillLeave of recipes");
  }
  ionViewDidLeave(){
    console.log("ionViewDidLeave of recipesl");
  }

  ngOnInit() {
  }

}
