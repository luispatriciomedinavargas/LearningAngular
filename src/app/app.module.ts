import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    //to use any module you need declare it, as example we´ll declare here  our custom component
    // HeroComponent,
    // ListComponent
  ],
  //if the word has module it ALWAYS GOES IN IMPORTS
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
