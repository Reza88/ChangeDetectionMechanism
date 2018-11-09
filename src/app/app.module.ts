import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildArrayComponent } from './components/child-array/child-array.component';
import { ChildObjectComponent } from './components/child-object/child-object.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildArrayComponent,
    ChildObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
