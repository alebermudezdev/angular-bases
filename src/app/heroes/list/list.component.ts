import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public heroNames: string[] = ['IronMan', 'Thor', 'Hulk', 'SpiderMan'];
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }

}
