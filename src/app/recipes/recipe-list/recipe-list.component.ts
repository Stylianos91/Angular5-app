import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [new Recipe('Some name for recipe', 'Some description for recipe' ,
    'http://eatdrinkpaleo.com.au/wp-content/uploads/2016/05/Vietnamese-lemongrass-pork-recipe_900-1.jpg'),
    new Recipe('Some name for recipe', 'Some description for recipe' ,
      'http://eatdrinkpaleo.com.au/wp-content/uploads/2016/05/Vietnamese-lemongrass-pork-recipe_900-1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
