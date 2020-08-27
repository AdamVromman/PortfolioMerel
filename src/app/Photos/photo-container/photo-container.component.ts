import { Component, OnInit, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../../assets/photos/photos.json'
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.css']
})
export class PhotoContainerComponent implements OnInit {

  public album: any;
  public album1 = [];
  public album2 = [];
  public album3 = [];

  @ViewChildren(PhotoComponent) photos: any;
  @ViewChild('photoOverlay', {static:false})photoOverlay: ElementRef;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this._route.params.subscribe(p =>
      {
        this.album = albums.filter(d => d.link === p['album'])[0];
        for (let x = 0; x < this.album.photos.length; x+=3)
        {
          if (this.album.photos[x])
          {
            this.album1.push(this.album.photos[x]);
          }
          if (this.album.photos[x + 1])
          {
            this.album2.push(this.album.photos[x + 1]);
          }
          if (this.album.photos[x + 2])
          {
            this.album3.push(this.album.photos[x + 2]);
          }
         
         
         
        }
      });
  }

  ngAfterViewInit()
  {
    let overlay = document.getElementById('photoOverlay');
    let images: any[] = this.album.photos;
    for (let item of this.photos._results)
    {

      let carouselItems = document.getElementsByClassName('carousel-item');
      item.image.nativeElement.addEventListener('click', () =>
      {
        carouselItems[images.indexOf(item.photoUrl, 0)].className = 'carousel-item active';
        overlay.style.display = 'flex';
      });

      item.image.nativeElement.addEventListener('keydown', (event: any) =>
      {
        console.log(event);
        if (event.keyCode == 13)
        {
          carouselItems[images.indexOf(item.photoUrl, 0)].className = 'carousel-item active';
          this.photoOverlay.nativeElement.style.display = 'flex';
    }
      });
    }
    document.getElementById('close').addEventListener('click', () =>
  {
    overlay.style.display = 'none';
    let active = document.getElementsByClassName('carousel-item active')[0];
    active.className = 'carousel-item';
  });
  }
  

  

}
