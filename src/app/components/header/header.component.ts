import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { ArticlesService } from "../../services/articles/articles.service";

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
      url: "home"
    },{
      text: "Front End",
      url: "frontend"
    },{
      text: "Back End",
      url: "backend"
    },{
     text: "Basis",
      url: "basis" 
    },{
      text: "Tools",
      url: "tools"
    },{
      text: "Thinking",
      url: "thinking"
    }
  ]
  constructor(private articlesService: ArticlesService,
      private articleService: ArticleService
    ) { }

  ngOnInit(): void {
  }

  setArticlesCategory(select: string){
    this.articlesService.setArticlesCategory(select);
    this.articleService.setSelectArticle("");
  }

}
