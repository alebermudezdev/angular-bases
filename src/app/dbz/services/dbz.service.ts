import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DBZService {
  
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Gokú',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character: Character): void {
    // set new character
    const newCharacter: Character = {...character, id: uuid()}
    // insert data
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    // update characters
    this.characters = this.characters.filter((character: Character) => character.id !== id);
  }
  
}