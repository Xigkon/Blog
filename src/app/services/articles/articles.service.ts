import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles ={
    basis:["操作系统.md","浏览器.md","算法.md","网络.md"],
    backend:["NodeJs.md","NodeJs.md","NodeJs.md","NodeJs.md","NodeJs.md","NodeJs.md","NodeJs.md","NodeJs.md","NodeJs.md","NodeJs.md",],
    frontend:["Html & Css.md","Javascript.md","ReactJs.md","Javascript.md","Html & Css.md","Javascript.md","ReactJs.md","Javascript.md","Html & Css.md","Javascript.md","ReactJs.md","Javascript.md",],
    idea:["假的1","假的2"],
    tools:["假的1","假的2","假的3"]
  }
  constructor() { }

  getArticles(category){
    return this.articles[category];
  }
}
