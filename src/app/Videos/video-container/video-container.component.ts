import { Component, OnInit, ViewChildren } from '@angular/core';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {

  public urls: any[] = [
    {
      name:"meskeremMees", 
      title:"Meskerem Mees - Joe", 
      description:"Dit is een mooie beschrijving", 
      width: 480, 
      height:360,
      url:"https://www.youtube.com/watch?v=OxMGzXGgXFg"
    },
    {
      name:"krankk",
      title:"KRANKk - Everybody's sick", 
      description:"Dit is een mooie beschrijving",
      width:640,
      height:360,
      url:"https://www.youtube.com/watch?v=10lWLk00YlQ"
    },
    {
      name:"meskeremMees1", 
      title:"Meskerem Mees - Joe", 
      description:"Dit is een mooie beschrijving", 
      width: 640,
      widthProc: 640, 
      height:360,
      url:"https://www.youtube.com/watch?v=OxMGzXGgXFg"
    },
    {
      name:"meskeremMees2", 
      title:"Meskerem Mees - Joe", 
      description:"Dit is een mooie beschrijving", 
      width: 480,
      widthProc:640, 
      height:360,
      url:"https://www.youtube.com/watch?v=OxMGzXGgXFg"
    },
    {
      name:"landscapemode", 
      title:"Landscapemode video", 
      description:"Dit is om te testen hoe lange videos werken", 
      width: 2280,
      widthProc:640,  
      height:1080,
      url:"https://www.youtube.com/watch?v=OxMGzXGgXFg"
    },
    {
      name:"portraitmode", 
      title:"portret mode", 
      description:"Hiermee test ik rechtopstaande videos", 
      width: 1080, 
      widthProc:640, 
      height:2280,
      url:"https://www.youtube.com/watch?v=OxMGzXGgXFg"
    },
    {
      name:"meskeremMees5", 
      title:"Meskerem Mees - Joe", 
      description:"Dit is een mooie beschrijving", 
      width: 480, 
      widthProc:640, 
      height:360,
      url:"https://www.youtube.com/watch?v=OxMGzXGgXFg"
    },
  ];

  constructor() { }

  ngOnInit(): void {

  
    window.addEventListener('load', () => {
      let videos = document.getElementsByTagName('app-video');
      for (var x = 0; x < this.urls.length - 1; x+=2)
      {
      var totalWidth = this.urls[x].width + this.urls[x + 1].width;
      videos[x].setAttribute('style', "width: " + ((this.urls[x].width - totalWidth / 100 * 2) / totalWidth * 100) + '%;' );
      videos[x + 1].setAttribute('style', "width: " + ((this.urls[x + 1].width  - totalWidth / 100 * 2) / totalWidth * 100) + '%;');
      }
      
    });

  }

}
