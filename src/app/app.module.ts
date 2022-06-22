import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabComponent } from './lab/lab.component';
import { LabAltOneMethodComponent } from './lab-alt-one-method/lab-alt-one-method.component';

@NgModule({
  declarations: [
    AppComponent,
    LabComponent,
    LabAltOneMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
