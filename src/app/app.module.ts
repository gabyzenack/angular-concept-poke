import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/app-home.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    ListComponent,
    DetailComponent
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
