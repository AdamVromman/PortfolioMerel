import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() photoUrl: string;
  @Input() folderUrl: string;
  @ViewChild('image',{static:false}) image: ElementRef;


  constructor() { 

    

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit()
  {
  //   let imageHtml = this.image.nativeElement
  //   imageHtml.addEventListener('click', () =>
  //   {
  //     var div = document.createElement('div');
  //     document.body.insertAdjacentElement('afterbegin', div);
  //     div.style.backgroundColor = 'rgba(0,0,0,0.4)';
  //     div.style.width = '100%';
  //     div.style.height = '100%';
  //     div.style.zIndex = '1100';
  //     div.style.position = 'fixed';
  //     div.style.display = 'flex';
  //     div.style.flexDirection = 'column';
  //     div.style.justifyContent = 'center';
  //     div.setAttribute('id', "super");
  //     var imageCarousel = document.createElement('app-carousel');
  //     imageCarousel.style.zIndex = '1101';
  //     div.addEventListener('click', () => 
  //     {
  //     let superOverlay = document.getElementById('super');
  //     if (superOverlay != null)
  //     {
  //       document.body.removeChild(superOverlay);
  //     }
  //   });
  //   });
  }


  public onError()
  {
    this.image.nativeElement.src = 'url(assets/error.png)';
    
  }

}
