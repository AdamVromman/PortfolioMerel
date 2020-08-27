import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import  photos from '../../../assets/photos/photos.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent implements OnInit {

  public albums: any[];
  
  @ViewChildren('album') albumsHTML: QueryList<ElementRef>;
  @ViewChildren('text') textsHTML: QueryList<ElementRef>;

  constructor(
    private router: Router
  ) {
    this.albums = photos;
   }

  ngOnInit(): void {
   
  }

  ngAfterViewInit()
  { 
    let albumsCovers = this.albumsHTML.toArray();
    for (let x = 0; x <= this.albums.length - 1; x++)
    {
      let element = <HTMLImageElement>albumsCovers[x].nativeElement;
      element.src = `assets/photos/${this.albums[x].cover}.jpg`;
    }
  }

  focus(event: Event)
  {
    let target = event.target as HTMLElement;
    target.style.opacity = '1';
  }

  blur(event:Event)
  {
    let target = event.target as HTMLElement;
    target.style.opacity = '0';
  }

  followLink(event: KeyboardEvent)
  {
    let target = event.srcElement as HTMLElement
    if (event.keyCode == 13)
    {
      this.router.navigate(['foto/',target.attributes[3].value]);
    }
  }

}
