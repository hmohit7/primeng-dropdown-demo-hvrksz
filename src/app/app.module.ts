import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ValidatorComponent } from './validator/validator.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { ButtonModule } from 'primeng/button';
import { UtilsService } from './utils.service';
import { ValidatorServiceService } from './validator-service.service';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    InputNumberModule,
    AppRouting,
    ButtonModule,
  ],
  providers: [UtilsService,ValidatorServiceService],
  declarations: [AppComponent, ValidatorComponent, DataEntryComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
