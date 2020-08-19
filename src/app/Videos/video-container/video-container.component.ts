import { Component, OnInit, ViewChildren } from '@angular/core';
import { VideoComponent } from '../video/video.component';
import urlsJson from '../../../assets/videos/videos.json';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {

  public urls: any[];

  constructor() {

    this.urls = urlsJson;

   }

  ngOnInit(): void {
  }

}
