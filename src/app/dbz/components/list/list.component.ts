import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent { 

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 100
    }
  ];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter;

  constructor() { }

  deleteCharacter(id?: string) {
    // check id
    if (!id) return;
    // emit data
    this.onDeleteCharacter.emit(id);
  }
  
}
