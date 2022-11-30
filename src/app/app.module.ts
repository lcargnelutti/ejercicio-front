import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from  '@angular/common/http';

import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { ExternalReferencePipe } from './pipes/external-reference.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ReportesComponent,
    HomeComponent,
    ExternalReferencePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
