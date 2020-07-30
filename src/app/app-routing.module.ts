import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoContainerComponent } from './Videos/video-container/video-container.component';


const routes: Routes = [
  {component: VideoContainerComponent, path:'videos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
