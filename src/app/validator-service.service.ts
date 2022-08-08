import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorServiceService {
  constructor() {}

  hasValidMessage = '';

  hasValidMessageDisplay(data) {
    let capacity = JSON.parse(data.containerType).value.capacity;

    console.log('============');
    console.log(Number(capacity));
    console.log('============');

    if (
      Number(data.length) * Number(data.width) * Number(data.height) <=
      Number(capacity)
    ) {
      this.hasValidMessage='approved'
      // console.log('verified');
    }else{
      this.hasValidMessage='Rejected'

      // console.log('Rejected');

    }

    console.log(JSON.parse(data.containerType).value);

    return this.hasValidMessage;
  }
}
