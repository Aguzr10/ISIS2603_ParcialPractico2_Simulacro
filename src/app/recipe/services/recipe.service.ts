import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  
  private listURL =
    'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json';

  
  private detailURL =
    'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/1/recipe.json';
  constructor(private http: HttpClient) {}

  
  getRecipes(): Observable<any> {
    return this.http.get(this.listURL);
  }

  
  getRecipeById(): Observable<any> {
    return this.http.get(this.detailURL);
  }
}
