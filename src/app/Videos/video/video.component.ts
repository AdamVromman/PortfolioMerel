import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public loaded: boolean = false;
  @Input() video: any;

  constructor(
    private _element: ElementRef
  ) {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    let url = `assets/videos/${this.video.name}.mp4`;
    let videoHtml = <HTMLVideoElement>document.getElementById(this.video.name);
    let overlayHtml = document.getElementById(`${this.video.name}overlay`);
    //videoHtml.style.minWidth = '100%';
    videoHtml.setAttribute('src', url);
    //videoHtml.style.height = '240px';
    //overlayHtml.style.width = '100%';
    //overlayHtml.style.height = '240px';
    overlayHtml.style.backgroundColor = 'rgba(0,0,0,0.4)';
    overlayHtml.addEventListener('mouseenter', () => 
    {
      overlayHtml.style.cursor = 'pointer';
      overlayHtml.style.opacity = '0';
      videoHtml.play();
    });
    overlayHtml.addEventListener('mouseout', () =>
    {
      overlayHtml.style.cursor = 'default';
      overlayHtml.style.opacity = '1';
      videoHtml.pause();
    });
    overlayHtml.addEventListener('click', () =>
    {
     
      window.open(this.video.url,'_blank');
    });
  }

}
