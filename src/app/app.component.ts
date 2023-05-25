// this is our heart/brain/principal component
// the other exist to most easly to work because you have independent files to have ONLY ONE THING separate beetween them
// (app.component.html/spect.ts/module.ts/)

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title:string = 'Hola mundo';
//property
// public counter:number = 19;


// here is the method that you have in app.component.html, and angular knows it by reference because in the app.module.ts you have all reference there
// and well also is the only method calls like its
// increaseBy(value:number):void {
// this.counter +=value;
// }
// resetCounter():void{
// this.counter=10;
// }


}
