import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CamerasComponent } from './components/cameras/cameras.component';
import { LensesComponent } from './components/lenses/lenses.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { FilmmakingComponent } from './components/filmmaking/filmmaking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CamerasComponent,
    LensesComponent,
    PhotographyComponent,
    FilmmakingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
