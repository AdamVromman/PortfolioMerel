import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DirectiveResolver } from '@angular/compiler';

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
      overlayHtml.style.opacity = '1';
      videoHtml.play();
    });
    overlayHtml.addEventListener('mouseout', () =>
    {
      overlayHtml.style.cursor = 'default';
      overlayHtml.style.opacity = '0';
      videoHtml.pause();
    });
    overlayHtml.addEventListener('click', () =>
    {
      var div = document.createElement('div');
      document.body.insertAdjacentElement('afterbegin', div);
      div.style.backgroundColor = 'rgba(0,0,0,0.4)';
      div.style.width = '100%';
      div.style.height = '100%';
      div.style.zIndex = '1100';
      div.style.position = 'fixed';
      div.style.display = 'flex';
      div.style.flexDirection = 'column';
      div.style.justifyContent = 'center';
      div.setAttribute('id', "super");
      var groteVideo = document.createElement('video');
      groteVideo.src = videoHtml.src
      groteVideo.style.maxWidth = '80%';
      groteVideo.style.maxHeight = '80%';
      groteVideo.autoplay = true;
      groteVideo.style.marginLeft = 'auto';
      groteVideo.style.marginRight = 'auto';
      div.appendChild(groteVideo);
      var ytLogo = document.createElement('img');
      //ytLogo.src = 'assets/yt.svg';
      //ytLogo.style.color = 'white';
      
      div.insertAdjacentElement('beforeend', ytLogo);
      div.addEventListener('click', () => 
    {
      let superOverlay = document.getElementById('super');
      if (superOverlay != null)
      {
        document.body.removeChild(superOverlay);
      }
    });
    });
    document.addEventListener('scroll', () => 
    {
      let superOverlay = document.getElementById('super');
      if (superOverlay != null)
      {
        document.body.removeChild(superOverlay);
      }
    });
    
  }

}
