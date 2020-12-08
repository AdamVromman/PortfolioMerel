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
  @ViewChild('loading', {static: false}) loadingHTML: ElementRef;


  constructor() { 

    

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit()
  {
  }


  public onError()
  {
    this.image.nativeElement.src = 'url(assets/error.png)';
    
  }

}
