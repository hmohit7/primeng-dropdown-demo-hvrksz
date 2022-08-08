import { Injectable, EventEmitter } from '@angular/core';
// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';
// import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class UtilsService {
  argusContainerData: any;
  validator:EventEmitter<boolean> = new EventEmitter();
  constructor() {}


  triggerValidator(){
    console.log('ios working and verifyit')
    this.validator.next(true)
  }
}
