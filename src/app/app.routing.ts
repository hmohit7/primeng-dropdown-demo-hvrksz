import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { ValidatorComponent } from './validator/validator.component';

// import { BlueComponent } from './components/blue.component';
// import { RedComponent } from './components/red.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'data',
        component: DataEntryComponent,
      },
      {
        path: 'validator',
        component: ValidatorComponent,
        // outlet: 'header1'
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRouting {}
