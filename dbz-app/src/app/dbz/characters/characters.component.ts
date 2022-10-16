import { Component, Input } from '@angular/core';

import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  @Input() characters: Character[] = [];
}
