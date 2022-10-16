import { DbzService } from './../../services/dbz.service';
import { Component } from '@angular/core';

import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  newCharacter: Character = {
    name: '',
    power: 0,
  };

  constructor(private DbzService: DbzService) {}

  restoreCharacter() {
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }

  add() {
    if (this.newCharacter.name.trim().length === 0) return;

    this.DbzService.addCharacter(this.newCharacter);
    this.restoreCharacter();
  }
}
