import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CamerasComponent } from './pages/cameras/cameras.component';
import { LensesComponent } from './pages/lenses/lenses.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { FilmmakingComponent } from './pages/filmmaking/filmmaking.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cameras', component: CamerasComponent },
  { path: 'lenses', component: LensesComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'filmmaking', component: FilmmakingComponent },
  { path: ':category/:postId', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
