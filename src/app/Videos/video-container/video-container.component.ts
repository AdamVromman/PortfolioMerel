import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { VideoComponent } from '../video/video.component';
import urlsJson from '../../../assets/videos/videos.json';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {

  public urls: any[];
  @ViewChild('filmOverlay', {static: false}) filmOverlay: ElementRef;
  @ViewChild('filmOverlayVideo', {static:false}) filmOverlayVideo: ElementRef;
  private filmOverlayElement: HTMLElement;
  private filmOverlayVideoElement: HTMLVideoElement;

  constructor() {

    this.urls = urlsJson;

   }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this.filmOverlayElement = this.filmOverlay.nativeElement;
    this.filmOverlayVideoElement = this.filmOverlayVideo.nativeElement;
    document.getElementById('close').addEventListener('click', () =>
    {
      this.filmOverlayElement.style.display = 'none';
      this.filmOverlayVideoElement.pause();
      this.filmOverlayVideoElement.muted = true;
    });
  }

  openOverlay(event:any)
  {
    this.filmOverlayVideoElement.controls = true;
    this.filmOverlayVideoElement.autoplay = true;
    this.filmOverlayVideoElement.muted = false;
    this.filmOverlayVideoElement.src = event;
    this.filmOverlayElement.style.display = 'flex';
  }

}
