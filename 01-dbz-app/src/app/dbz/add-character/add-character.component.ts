import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output() newCharacter: EventEmitter<Character> = new EventEmitter();

  resetCharacter($event: any) {
    $event.target.name.value = '';
    $event.target.power.value = '';
  }

  add($event: any) {
    $event.preventDefault();
    if ($event.target.name.value.trim().length === 0) return;

    this.newCharacter.emit({
      name: $event.target.name.value,
      power: $event.target.power.value,
    });

    this.resetCharacter($event);
  }
}
