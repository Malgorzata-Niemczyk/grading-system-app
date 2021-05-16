import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GradesListComponent } from './components/grades/grades-list/grades-list.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'grades', component: GradesListComponent },
  { path: 'edit-grade-form', component: EditFormComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
