import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles/articles.service";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  articles=[];
  category = "tools";

  constructor(private articlesService: ArticlesService) {
    this.articles = articlesService.getArticles(this.category);
    console.log(this.articles);
  }


  ngOnInit(): void {
  }

}
