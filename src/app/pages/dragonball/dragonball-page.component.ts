import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({

  templateUrl: './dragonball-page.component.html',
  imports: [NgClass]
})

export class DragonballPageComponent {

  name = signal('Goh');
  power = signal(1000);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Veg', power: 8001 },
    { id: 3, name: 'pet', power: 3001 },
    { id: 4, name: 'yan', power: 500 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  });

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;

    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters().push(newCharacter)
  }
}
