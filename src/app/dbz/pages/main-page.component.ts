import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(
    private dbzSv: DBZService
  ) {}

  get characters(): Character[] {
    return [...this.dbzSv.characters];
  }

  onAddCharacter(character: Character): void {
    this.dbzSv.addCharacter(character);
  }

  onDeleteCharacter(id: string): void {
    this.dbzSv.deleteCharacterById(id);
  }



}