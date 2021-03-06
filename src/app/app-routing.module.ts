import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GradesListComponent } from './components/grades/grades-list/grades-list.component';
import { GradeDetailsComponent } from './components/grades/edit-grade-details/grade-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'grades', component: GradesListComponent },
  { path: 'grades/:id', component: GradeDetailsComponent },
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
