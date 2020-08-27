import { Component, OnInit, ViewChildren } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import  carouselPhotos  from 'src/assets/homeSlideshow/carouselImages.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images: any[];
  @ViewChildren('carouselImage') carouselImages: any;
  @ViewChildren('carouselItem') carouselItem: any;

  constructor() { }

  ngOnInit(): void {
    this.images = carouselPhotos.map((x: any) => `assets/homeSlideshow/${x}.jpg`);
  }

  ngAfterViewInit(): void
  {
    let carouselItemElements: any[] = this.carouselItem._results.map((i: any) => i.nativeElement);
    carouselItemElements[Math.floor(Math.random() * carouselItemElements.length)].className += ' active';
   

  }

  

}



