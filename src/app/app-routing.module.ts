import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoContainerComponent } from './Videos/video-container/video-container.component';
import { PhotoContainerComponent } from './Photos/photo-container/photo-container.component';
import { AlbumContainerComponent } from './Photos/album-container/album-container.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {component: VideoContainerComponent, path:'film'},
  {component:AlbumContainerComponent, path:'albums'},
  {component:PhotoContainerComponent, path:'albums/:album'},
  {component: HomeComponent, path:'home'},
  {path:'', redirectTo:'home', pathMatch: 'full' },
  {path:'**', redirectTo:'home',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
