import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles :any=[]
  SelectArticleCategory="home";

  constructor(private http: HttpClient) { this.getDataNameFromJson("./assets/article/data.json");}

  getDataNameFromJson(path: string){
    this.http.get(path)
    .subscribe(data => {
      this.articles=data;
      console.log(this.articles)
    });
  }

  getArticlesCategory(){
    return this.SelectArticleCategory;
  }
  setArticlesCategory(select: string){
    this.SelectArticleCategory= select;
  }
  getSelectArticles(){
    if(this.SelectArticleCategory==="") return null;
    return this.articles[this.SelectArticleCategory];
  }

}
