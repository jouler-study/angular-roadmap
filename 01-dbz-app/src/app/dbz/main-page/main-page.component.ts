import { Component } from '@angular/core';

import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
  ];

  addCharacter(character: Character) {
    this.characters.push(character);
  }
}
