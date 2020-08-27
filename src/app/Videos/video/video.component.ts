import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public loaded: boolean = false;
  @Input() video: any;
  public title: string;
  public description: string;
  @ViewChild('video', {static: false}) videoHTML: ElementRef;
  @ViewChild('overlay', {static: false}) overlayHTML: ElementRef;
  private overlayElement: HTMLElement
  private videoElement: HTMLVideoElement


  constructor(
  ) {
   }

  ngOnInit(): void {

    this.title = this.video.title;
    this.description = this.video.description;
    
  }

  ngAfterViewInit():void{

    this.overlayElement = this.overlayHTML.nativeElement;
    this.videoElement = this.videoHTML.nativeElement;
    document.getElementById('close').addEventListener('click', () =>
    {
      this.overlayElement.style.display = 'none';
      this.videoElement.pause
      this.videoElement.muted = true;
    });

    let url = `assets/videos/${this.video.name}.mp4`;
    this.videoElement.setAttribute('src', url);
    this.overlayElement.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }


  openOverlay(event: any):void
  {
    let url = `assets/videos/${this.video.name}.mp4`;
    let element = event.srcElement as HTMLElement;
    if (element.tagName !== 'A' && element.tagName !== 'IMG')
    {
      let overlay = document.getElementById('filmOverlay');
      let video = <HTMLVideoElement>document.getElementById('overlayVideo');
      video.controls = true;
      video.autoplay = true;
      video.muted = false;
      video.src = url;
      overlay.style.display = 'flex';
    }
  }

  openOverlayKeyboard(event: KeyboardEvent)
  {
    if (event.keyCode == 13)
    {
      this.openOverlay(event);
    }
  }

  blur(event: Event)
  {
      this.overlayElement.style.opacity = '0';
      this.videoElement.pause();

  }

  focus()
  {
      this.overlayElement.style.opacity = '1';
      this.videoElement.play();
  }


}
