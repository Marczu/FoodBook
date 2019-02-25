import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Testowy przepis', 'To jest testowy przepis',
      'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/ciasto_na_pizze_05_0.jpg'),
    new Recipe('Drugi przepis', 'Dalsze testowanie mojego ulubionego przepisu traalala cos tam jeszcze',
      'https://s3-media2.fl.yelpcdn.com/bphoto/ejfH5dBk4pm_PI_TnLaxWQ/ls.jpg')
  ];

  getRecipes(){
    return this.recipes.slice()
  }

}
