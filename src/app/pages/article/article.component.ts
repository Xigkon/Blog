import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles/articles.service";
import { ArticleService } from "../../services/article/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private articlesService: ArticlesService,
      private articleService: ArticleService
    ) { }

  ngOnInit(): void {
  }

  getArticles(){
    return this.articlesService.getSelectArticles();
  }
  getArticlePath(){
    return this.articleService.getArticlePath();
    //console.log(this.articleService.getArticlePath());
  }

  DisplayContent(){
    return this.articleService.SelectArticle!="";
  }
}
