import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import  photos from '../../../assets/photos/photos.json'

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent implements OnInit {

  public albums: any[];
  @ViewChildren('album') albumsHTML: QueryList<ElementRef>;

  constructor() {
    this.albums = photos;
   }

  ngOnInit(): void {
   
  }

  ngAfterViewInit()
  { 
    let albumsCovers = this.albumsHTML.toArray();
    for (let x = 0; x <= this.albums.length - 1; x++)
    {
      let element = <HTMLElement>albumsCovers[x].nativeElement;
      element.style.backgroundImage = `url(assets/photos/${this.albums[x].cover}.jpg)`;
    }

  }

}
