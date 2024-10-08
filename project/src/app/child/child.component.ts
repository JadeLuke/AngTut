import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`<button class="btn" (click)="addItem()">Add item</button>`,
  standalone: true,
  imports: [],
  // templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Output() addItemEvent = new EventEmitter<string>()

addItem(){
  this.addItemEvent.emit('🐢')
}
}
