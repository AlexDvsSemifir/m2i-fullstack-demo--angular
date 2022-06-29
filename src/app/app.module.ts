import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { UserComponent } from './user/user.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { ListeComponent } from './liste/liste.component';
import { MagieComponent } from './magie/magie.component';
import { ListeFiltreeComponent } from './liste-filtree/liste-filtree.component';
import { ShowDateComponent } from './show-date/show-date.component';
import { GenericAlertButtonComponent } from './generic-alert-button/generic-alert-button.component';
import { ButtonMenuComponent } from './button-menu/button-menu.component';
import { HorlogeComponent } from './horloge/horloge.component';
import { HorlogeMenuComponent } from './horloge-menu/horloge-menu.component';
import { ListeCoursesComponent } from './liste-courses/liste-courses.component';
import { ReactiveListeCoursesComponent } from './reactive-liste-courses/reactive-liste-courses.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { HidderComponent } from './hidder/hidder.component';
import { FormbuilderListeCoursesComponent } from './formbuilder-liste-courses/formbuilder-liste-courses.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DataCoursesComponent } from './Output-demo/data-courses/data-courses.component';
import { FormCoursesComponent } from './Output-demo/form-courses/form-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    UserComponent,
    CarteVisiteComponent,
    AlertButtonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreeComponent,
    ShowDateComponent,
    GenericAlertButtonComponent,
    ButtonMenuComponent,
    HorlogeComponent,
    HorlogeMenuComponent,
    ListeCoursesComponent,
    ReactiveListeCoursesComponent,
    UserCardsComponent,
    HidderComponent,
    FormbuilderListeCoursesComponent,
    UserFormComponent,
    DataCoursesComponent,
    FormCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
