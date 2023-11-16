import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CamerasComponent } from './components/cameras/cameras.component';
import { LensesComponent } from './components/lenses/lenses.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { FilmmakingComponent } from './components/filmmaking/filmmaking.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cameras', component: CamerasComponent },
  { path: 'lenses', component: LensesComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'filmmaking', component: FilmmakingComponent },
  { path: 'cameras/:id', component: PostComponent },
  { path: 'lenses/:id', component: PostComponent },
  { path: 'photography/:id', component: PostComponent },
  { path: 'filmmaking/:id', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
