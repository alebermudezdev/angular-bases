import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  public title: string = 'Hero';
  public name: string = 'IronMan';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }
  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero(): void {
    this.name = 'SpiderMan';
  }
  changeAge(): void {
    this.age = 25;
  }
  reset(): void {
    this.name = 'IronMan';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // });

  }
}
