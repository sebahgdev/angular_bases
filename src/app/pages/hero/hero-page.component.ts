import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({

  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})

export class HeroPageComponent {


  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

  capitalizedNamed = computed(() => this.name().toUpperCase());

  /*   getHeroDescription() {
      return `${this.name()} - ${this.age()}`
    } */

  changeHero() {
    this.name.set('Spiderman');
    this.age
  }
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60)
  }



}
