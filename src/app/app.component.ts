import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  riderAvatar = [
    "assets/riders/MW.jpg",
    "assets/riders/Default.jpg",
    "assets/riders/Default.jpg",
    "assets/riders/Default.jpg",
    "assets/riders/Default.jpg"
  ];

  lastname = [
    "Willmann",
    "Bachmann",
    "Büttner",
    "Senftle"
  ]

  name = [
    "Martin",
    "Viktor",
    "Karl",
    "Louis"
  ]

  title = 'EHcarpool';
}
