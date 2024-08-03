// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Make sure CommonModule is imported
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule // Ensure CommonModule is imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
