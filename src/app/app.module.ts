import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { appRouterModule } from './app.routes';
import { AlbumpageComponent } from './pages/albumpage/albumpage.component';
import { ModalComponent } from './pages/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AlbumpageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
