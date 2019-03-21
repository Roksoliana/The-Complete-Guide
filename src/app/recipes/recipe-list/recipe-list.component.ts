import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test recipe', 'This is a simply a test', 'https://pinchofyum.com/wp-content/uploads/Tofu-Lettuce-Wraps-Recipe.jpg'),
    new Recipe('A test recipe', 'This is a simply a test', 'https://pinchofyum.com/wp-content/uploads/Tofu-Lettuce-Wraps-Recipe.jpg')
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
