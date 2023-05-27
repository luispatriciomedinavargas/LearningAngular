import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // with the decorator on a property we're making few things
  // the frist is that our ListComponent can be recibed a property call characterList
  // between () we can put an nickname to the property example @input("listCharacter")
  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
  }]
  // with this property we can communicate with other components
  @Output()
  public onDeleted: EventEmitter<string>= new EventEmitter();

onDeletedCharacterFromList(id?:string): void {
  if(!id) return
    this.onDeleted.emit(id);
  }


}
