import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoContainerComponent } from './Videos/video-container/video-container.component';
import { PhotoContainerComponent } from './Photos/photo-container/photo-container.component';


const routes: Routes = [
  {component: VideoContainerComponent, path:'videos'},
  {component:PhotoContainerComponent, path:'photos'},
  {path:'', redirectTo:'videos', pathMatch: 'full' },
  {path:'**', redirectTo:'videos',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
