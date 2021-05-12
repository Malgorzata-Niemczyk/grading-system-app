import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GradesListComponent } from './components/grades-list/grades-list.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { GradeDetailsComponent } from './components/grade-details/grade-details.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    GradesListComponent,
    AddFormComponent,
    GradeDetailsComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
