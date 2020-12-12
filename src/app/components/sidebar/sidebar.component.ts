import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles/articles.service";
import { ArticleService } from "../../services/article/article.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private articlesService: ArticlesService,
      private articleService: ArticleService
    ) { }

  ngOnInit(): void {
  }
  getArticles(){
    return this.articlesService.getSelectArticles();
  }

  setSelectArticle(select: string){
    this.articleService.setSelectArticle(select);
  }

}
