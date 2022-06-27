import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { UserComponent } from './user/user.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    UserComponent,
    CarteVisiteComponent,
    AlertButtonComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
