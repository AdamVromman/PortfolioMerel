import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
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
    

  }

}
