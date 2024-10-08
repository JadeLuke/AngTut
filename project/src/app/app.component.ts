import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';
import { NgOptimizedImage } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  template: `
 <form [formGroup]="profileForm"   (ngSubmit)="handleSubmit()" >
 <label> Name <input type="text" formControlName="name" /> </label>
 <label> Email <input type="email" formControlName="email" /> </label>
 <button type="submit"> Submit </button>
 </form>
 <h2>Profile Form</h2>
<p>Name: {{ profileForm.value.name }}</p>
<p>Email: {{ profileForm.value.email }}</p>
  `,
  // styles: ':host{color: #a144eb}',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ChildComponent, CommentsComponent, NgOptimizedImage, ReactiveFormsModule],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  // city = 'San Francisco'
  // isLoggedIn = true;
  // isServerRunning = false;
  // operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOs'}, {id: 'linux', name: 'Linux'}]
  // users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}]
  // isEditable = true;
  // message = '';
  // onMouseOver(){
  // this.message = 'Way to go'
  // @Input() occupation = '';

  // items = new Array();
  // addItem(item: string) {
  //   this.items.push(item)
  // logoUrl = '/assets/favicon.ico';
  // logoAlt = 'Angular logo';
  // username = 'youngTech';

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })
  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
