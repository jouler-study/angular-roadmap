import { Injectable } from '@angular/core';

import { Character } from 'src/app/interfaces/character';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
  ];

  get characters(): Character[] {
    return [...this._characters];
  }

  addCharacter(character: Character) {
    this._characters.push(character);
  }
}
