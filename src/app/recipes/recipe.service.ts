import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Carbonara',
      'Przepis na pyszną Carbonarę',
      'https://static01.nyt.com/images/2018/08/10/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X.jpg',
      [
        new Ingredient("Makaron spagetti", 1),
        new Ingredient("Czosnek", 3),
        new Ingredient("Grana Padano", 5),
      ]),
    new Recipe('Drugi przepis',
      'Dalsze testowanie mojego ulubionego przepisu traalala cos tam jeszcze',
      'https://s3-media2.fl.yelpcdn.com/bphoto/ejfH5dBk4pm_PI_TnLaxWQ/ls.jpg',
      [
        new Ingredient("Bataty", 1),
        new Ingredient("Czosnek", 2),
        new Ingredient("Pietruszka", 8)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }

}
