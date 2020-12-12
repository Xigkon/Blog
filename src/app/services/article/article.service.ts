import { Injectable } from '@angular/core';
import { ArticlesService } from "../articles/articles.service";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseArticlesPath="./assets/article/"
  SelectArticle="";

  constructor(private articlesService: ArticlesService) { }

  getArticlePath(){
    return this.baseArticlesPath +this.articlesService.getArticlesCategory()+"/" + this.SelectArticle;
  }

  setSelectArticle(select: string){
    this.SelectArticle= select;
  }

  getSelectArticle(){
    return this.SelectArticle;
  }



}
