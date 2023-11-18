import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CamerasComponent } from './pages/cameras/cameras.component';
import { LensesComponent } from './pages/lenses/lenses.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { FilmmakingComponent } from './pages/filmmaking/filmmaking.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CamerasComponent,
    LensesComponent,
    PhotographyComponent,
    FilmmakingComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
