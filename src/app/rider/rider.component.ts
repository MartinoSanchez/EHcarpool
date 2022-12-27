import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class RiderComponent {
  @Input() picture:string = '';
  @Input() name:string = '';
}
