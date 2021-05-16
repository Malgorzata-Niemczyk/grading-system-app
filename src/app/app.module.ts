import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GradesListComponent } from './components/grades-list/grades-list.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { GradeDetailsComponent } from './components/grade-details/grade-details.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import { GradeItemComponent } from './components/grade-item/grade-item.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GradesListComponent,
    AddFormComponent,
    GradeDetailsComponent,
    AddButtonComponent,
    GradeItemComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
