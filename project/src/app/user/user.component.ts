import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
  <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
  <label for="framework"> Favorite Framework: <input id="framework" type="text" [(ngModel)]="favoriteFramework" /> </label>
  <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
  // templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'youngTech';
  // @Input() name = '';
  favoriteFramework = '';

  showFramework(){
    alert(this.favoriteFramework)
  }

}
