import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public loaded: boolean = false;
  @Input() video: any;
  @ViewChild('video', {static: false}) videoHTML: ElementRef;
  @ViewChild('overlay', {static: false}) overlayHTML: ElementRef;


  constructor(
    private _element: ElementRef
  ) {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    let url = `assets/videos/${this.video.name}.mp4`;
    let videoHtml = <HTMLVideoElement>this.videoHTML.nativeElement;
    let overlayHtml = <HTMLElement>this.overlayHTML.nativeElement;
    videoHtml.setAttribute('src', url);
    overlayHtml.style.backgroundColor = 'rgba(0,0,0,0.4)';
    overlayHtml.addEventListener('mouseenter', () => 
    {
      overlayHtml.style.cursor = 'pointer';
      overlayHtml.style.opacity = '0';
      videoHtml.play();
    });
    overlayHtml.addEventListener('mouseout', () =>
    {
      overlayHtml.style.opacity = '1';
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
      groteVideo.controls = true;
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

    videoHtml.addEventListener('fullscreenchange', () =>
    {
      console.log("test");
    });
    
  }


  public bigVideo()
  {
    let parent = <HTMLElement>this._element.nativeElement
    let video = <HTMLVideoElement>this.videoHTML.nativeElement;
    video.style.position = 'fixed';
    video.style.width = '70vw';
    video.style.zIndex = '300';
    video.style.left = '0';
    video.style.top = '0';
    video.setAttribute('controls', 'true');
    video.play();
    

     
  
  }

  public reset()
  {
    console.log('reset');
    let parent = <HTMLElement>this._element.nativeElement
    let video = <HTMLVideoElement>this.videoHTML.nativeElement;
    parent.style.width = '48%';
    parent.style.position = 'inherit';
    parent.style.marginLeft = '';
    parent.style.marginRight = '';
    parent.style.zIndex = '';
  }
  

  


}
