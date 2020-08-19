import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() photoUrl: string;
  @Input() folderUrl: string;
  @ViewChild('img') img: ElementRef;


  constructor() { 

    

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit()
  {
    
  }


  public onError()
  {
    this.img.nativeElement.src = 'url(assets/error.png)';
    
  }

}
