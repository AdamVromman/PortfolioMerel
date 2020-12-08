import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

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
  @ViewChild('loading', {static: false}) loadingHTML: ElementRef;
  private overlayElement: HTMLElement
  private videoElement: HTMLVideoElement
  @Output() openOverlayEvent: EventEmitter<string> = new EventEmitter<string>();


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
    this.videoElement.onloadeddata = () =>
    {
      console.log(`${this.video.title}`);
      this.videoElement.style.display = 'block';
      this.loadingHTML.nativeElement.style.display = 'none';
    };
    let url = `assets/videos/${this.video.name}.mp4`;
    this.videoElement.setAttribute('src', url);
    this.overlayElement.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }


  openOverlay():void
  {
    this.openOverlayEvent.emit(`assets/videos/${this.video.name}.mp4`);
  }

  openOverlayKeyboard(event: KeyboardEvent)
  {
    if (event.keyCode == 13)
    {
      this.openOverlay();
    }
  }

  blur()
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
