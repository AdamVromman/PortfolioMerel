import { Component, OnInit } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public active(event: any)
  {
    let elements = document.getElementsByClassName("nav-link");
    for (let x = 0; x < elements.length; x++)
    {
      elements[x].className = "nav-link";
    }
    event.toElement.className = `${event.toElement.className} active`;
  }

}
