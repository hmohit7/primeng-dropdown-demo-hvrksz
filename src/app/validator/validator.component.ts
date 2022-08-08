import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { ValidatorServiceService } from '../validator-service.service';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css'],
})
export class ValidatorComponent implements OnInit {
  constructor(
    private utils: UtilsService,
    private validateService: ValidatorServiceService
  ) {
    // this.utils.validator.subscribe((data) => {
    //   console.log('valid working or not=======0000');

    //   // this.getValidStatus();
    // });
  }

  ngOnInit() {
    console.log(this.utils.argusContainerData);
    // this.validateService.validateCapacity.subscribe(
    //   (res: any) => {
    //   })

    // this.utils.validator.subscribe(function (data) {
    //   debugger;

    //   this.validateService.hasValidMessageDisplay().subscribe((res) => {
    //     console.log(res + '=======0000');
    //   });
    // });


      let validatormessage=this.validateService.hasValidMessageDisplay(this.utils.argusContainerData)

      console.log(validatormessage)


  }

  // getValidStatus() {
  //   console.log('valid working or not=======0000');
  // }




  
}
