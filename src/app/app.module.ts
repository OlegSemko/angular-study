import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { WifeComponent } from './wife/wife.component';
import { WraperComponent } from './wraper/wraper.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    WifeComponent,
    WraperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
