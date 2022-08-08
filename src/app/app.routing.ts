import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { ValidatorComponent } from './validator/validator.component';
// import { Routes, RouterModule } from '@angular/router';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: '', component: DataEntryComponent },
  { path: 'validate', component: ValidatorComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
