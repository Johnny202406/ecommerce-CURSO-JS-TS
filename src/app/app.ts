import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My Recipe Box');
  private valuej = 'hede';
  name() {
    console.log('dsubj ');
  }
  constructor() {
    this.nam35e();
  }
  nam35e() {
    console.log('dsubj rg');
  }
  incrementar() {
    this.recipe.set(MOCK_RECIPES[0]);
    console.log('Botón 1 clickeado');
  }
  decrementar() {
    this.recipe.set(MOCK_RECIPES[1]);
    console.log('Botón 2 clickeado');
  }
  protected recipe: WritableSignal<RecipeModel> = signal(MOCK_RECIPES[0]);

  protected readonly contador = signal(0);

  protected incrementarR(): void {
    this.contador.update((valorActual) => valorActual + 1);
  }
  protected decrementarR(): void {
    if (this.contador() <= 0) return;
    this.contador.update((valorActual) => valorActual - 1);
  }
}
