import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

interface City {
  label: string;
  capacity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    shipment: any[];

  items: SelectItem[];

  item: string;

  constructor() {
    this.items = [];

    this.shipment = [
        {label: "small-shipment", capacity: 350},
        {label: "medium-shipment", capacity: 550},
        {label: "big-shipment", capacity: 750},
        {label: "duckling-shipment", capacity: 2500}
    ];

    
  }
}
