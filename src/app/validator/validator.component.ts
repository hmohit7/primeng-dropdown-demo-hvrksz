import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css'],
})
export class ValidatorComponent implements OnInit {
  constructor(private utils: UtilsService) {}

  ngOnInit() {
    console.log(this.utils.argusContainerData);
  }
}
