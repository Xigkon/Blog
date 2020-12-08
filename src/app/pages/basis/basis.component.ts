import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles/articles.service";

@Component({
  selector: 'app-basis',
  templateUrl: './basis.component.html',
  styleUrls: ['./basis.component.scss']
})
export class BasisComponent implements OnInit {

  articles=[];
  category = "basis";

  constructor(private articlesService: ArticlesService) {
    this.articles = articlesService.getArticles(this.category);
    console.log(this.articles);
  }
  ngOnInit(): void {
  }

}
