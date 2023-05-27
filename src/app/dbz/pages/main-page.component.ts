import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //this is as angular make their dependece inyection, and enable in whole component of Main Page the information of dbz.serfvice
    constructor( public dbzService: DbzService) {
    }


}
