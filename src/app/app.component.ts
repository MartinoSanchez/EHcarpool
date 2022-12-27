import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  rider_avatar = [
    "assets/riders/MW.jpg",
    "assets/riders/Default.jpg",
    "assets/riders/Default.jpg",
    "assets/riders/Default.jpg",
    "assets/riders/Default.jpg"
  ];

  rider_name = [
    "Martin",
    "Viktor",
    "Karl",
    "Louis"
  ]

  addRider() {
    
  }
}
