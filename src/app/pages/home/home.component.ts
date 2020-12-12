import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title="Xigkon's Blog";
  titleDescribe="千里之行，始于足下";
  homeDescribe1 ="在这里，我会记录的学习中遇到的问题以及解决方法";
  homeDescribe2 ="还有我奇怪的想法"

  homeItem= [
    {
      text: "Front End",
      url: "frontend",
      time: "Dec 5 2020"
    },{
      text: "Back End",
      url: "backend",
      time: "Dec 5 2020"
    },{
     text: "Basis",
      url: "basis" ,
      time: "Dec 9 2020"
    },{
      text: "Tools",
      url: "tools",
      time: "Dec 10 2020"
    },{
      text: "Thinking",
      url: "thinking",
      time: "Dec 8 2020"

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
