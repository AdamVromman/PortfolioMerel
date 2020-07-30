import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './Photos/photo/photo.component';
import { PhotoContainerComponent } from './Photos/photo-container/photo-container.component';
import { VideoComponent } from './Videos/video/video.component';
import { VideoContainerComponent } from './Videos/video-container/video-container.component';



@NgModule({
  declarations: [ PhotoComponent,
    PhotoContainerComponent,
    VideoComponent,
    VideoContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PhotoContainerComponent,
    VideoContainerComponent
  ]
})
export class ContentModule { }
