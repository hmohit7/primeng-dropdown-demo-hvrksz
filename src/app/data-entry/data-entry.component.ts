import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import {InputNumberModule} from 'primeng/inputnumber';

interface City {
  label: string;
  capacity: number;
}
@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent{


  shipment: any[];

  items: SelectItem[];

  item: string;

  constructor() {
    this.items = [];

    this.shipment = [
      { label: 'small-shipment', capacity: 350 },
      { label: 'medium-shipment', capacity: 550 },
      { label: 'big-shipment', capacity: 750 },
      { label: 'duckling-shipment', capacity: 2500 },
    ];
  }
  onChange(value: string) {
    alert('the selected value is ' + JSON.stringify(value));
  }
}