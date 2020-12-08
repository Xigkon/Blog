import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles/articles.service";

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  articles=[];
  category = "idea";

  constructor(private articlesService: ArticlesService) {
    this.articles = articlesService.getArticles(this.category);
    console.log(this.articles);
  }

  ngOnInit(): void {
  }

}
