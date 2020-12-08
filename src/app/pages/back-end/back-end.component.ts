import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles/articles.service";

@Component({
  selector: 'app-back-end',
  templateUrl: './back-end.component.html',
  styleUrls: ['./back-end.component.scss']
})
export class BackEndComponent implements OnInit {

  articles=[];
  category = "backend";

  constructor(private articlesService: ArticlesService) {
    this.articles = articlesService.getArticles(this.category);
    console.log(this.articles);
  }

  ngOnInit(): void {
  }



}
