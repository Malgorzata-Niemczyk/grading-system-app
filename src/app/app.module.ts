import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GradesListComponent } from './components/grades/grades-list/grades-list.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { GradeDetailsComponent } from './components/grades/grade-details/grade-details.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import { GradeItemComponent } from './components/grades/grade-item/grade-item.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GradesListComponent,
    AddFormComponent,
    GradeDetailsComponent,
    AddButtonComponent,
    GradeItemComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
