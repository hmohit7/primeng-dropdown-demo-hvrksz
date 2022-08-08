import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { UtilsService } from '../utils.service';

interface City {
  label: string;
  capacity: number;
}
@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css'],
})
export class DataEntryComponent {
  shipment: any[];
  containerData:any
  items: SelectItem[];
  value1:any;
  value2:any;
  value3:any;
  shipmentType:any;
  item: string;

  constructor(
    private utils:UtilsService
  ) {
    this.containerData={
      containerType:'',
      length:'',
      width:'',
      height:''
    }
    this.items = [];

    this.shipment = [
      { label: 'small-shipment', capacity: 350 },
      { label: 'medium-shipment', capacity: 550 },
      { label: 'big-shipment', capacity: 750 },
      { label: 'duckling-shipment', capacity: 2500 },
    ];
  }
  onChange(value: string) {
    // alert('the selected value is ' + JSON.stringify(value));
    this.shipmentType=JSON.stringify(value)
  }

  gotoPage() {
    this.containerData={
      containerType:this.shipmentType,
      length:this.value1,
      width:this.value2,
      height:this.value3
    }
   this.utils.argusContainerData=this.containerData

   this.utils.triggerValidator()
  }
}
