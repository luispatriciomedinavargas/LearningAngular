import { Component } from '@angular/core';

@Component({
  // selector means how you want call your component, labels HTMLS
  selector: "app-counter",
  template: `
  <h3>Counter from counter.componjents.ts: </h3>
  <h3>Counter from counter.componjents.ts: {{counter}} </h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="resetCounter()">reset</button>


  `,
  // uses it to show in browser
})
export class CounterComponent {
//property
public counter:number = 19;


// here is the method that you have in app.component.html, and angular knows it by reference because in the app.module.ts you have all reference there
// and well also is the only method calls like its
increaseBy(value:number):void {
this.counter +=value;
}
resetCounter():void{
this.counter=10;
}

}
