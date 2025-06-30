import { Component, signal } from '@angular/core';

@Component({

  templateUrl: './hero-page.component.html'
})

export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`
  }
  changeHero() {
    throw new Error('Method not implemented.');
  }
  resetForm() {
    throw new Error('Method not implemented.');
  }



}
