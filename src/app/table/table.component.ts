import { Component, Input } from '@angular/core';
import { RiderComponent } from '../rider/rider.component';

export interface IRider {
  image:string;
  name:string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  @Input() picture:string = '';
  @Input() name:string = '';
  rows: any[] = [];
  columns: IRider[] = [
    {image:"image", name: "name"},
  ]
  editRowId: any;

  constructor() {
    this.rows = [];
  }

  addRow() {
    let indexForId = this.rows.length + 1
    this.rows.push({id: indexForId, name: ''})
  }
}
