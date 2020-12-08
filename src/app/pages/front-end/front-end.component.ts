import { Component, OnInit,  } from '@angular/core';
import { ArticlesService } from "../../services/articles/articles.service";

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent implements OnInit {

  articles=[];
  category = "frontend";

  constructor(private articlesService: ArticlesService) {
    this.articles = articlesService.getArticles(this.category);
    console.log(this.articles);
  }

  ngOnInit(): void {
  }

}
