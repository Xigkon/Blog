import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "Xigkon";
  navigations = [
    {
      text: "Home",
      url: "../home"
    },{
      text: "Front End",
      url: "../frontend"
    },{
      text: "Back End",
      url: "../backend"
    },{
     text: "Basis",
      url: "../basis" 

    },{
      text: "Tools",
      url: "../tools"
    },{
      text: "Idea",
      url: "../idea"
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
