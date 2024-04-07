import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss'
})
export class AddCharacterComponent { 

  @Output()
  public onAddCharacter: EventEmitter<Character> = new EventEmitter;

  public character: Character = {
    name: '',
    power: 0,
  };

  constructor() { }

  saveCharacter() {
    // check character name
    if (this.character.name.length === 0) return;
    // emit data
    this.onAddCharacter.emit(this.character);
    // clear data
    this.character = {name: '', power: 0};
  }

}
