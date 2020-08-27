import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoContainerComponent } from './Videos/video-container/video-container.component';
import { PhotoContainerComponent } from './Photos/photo-container/photo-container.component';
import { AlbumContainerComponent } from './Photos/album-container/album-container.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {component: VideoContainerComponent, path:'film'},
  {component:AlbumContainerComponent, path:'foto'},
  {component:PhotoContainerComponent, path:'foto/:album'},
  {component: AboutComponent, path:'about'},
  {component: HomeComponent, path:'home'},
  {path:'', redirectTo:'home', pathMatch: 'full' },
  {path:'**', redirectTo:'home',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
