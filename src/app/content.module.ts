import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './Photos/photo/photo.component';
import { PhotoContainerComponent } from './Photos/photo-container/photo-container.component';
import { VideoComponent } from './Videos/video/video.component';
import { VideoContainerComponent } from './Videos/video-container/video-container.component';
import { AlbumContainerComponent } from './Photos/album-container/album-container.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ PhotoComponent,
    PhotoContainerComponent,
    VideoComponent,
    VideoContainerComponent,
    AlbumContainerComponent,
    HomeComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    PhotoContainerComponent,
    VideoContainerComponent,
    NavigationComponent
  ]
})
export class ContentModule { }
