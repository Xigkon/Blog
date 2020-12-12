import { Component } from '@angular/core';
import { ArticlesService } from "./services/articles/articles.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';


  url= "./assets/a.md";

  constructor(private articlesService: ArticlesService){}

  getSelectArticle(){
    return this.articlesService.getArticlesCategory();
  }

  markdown = `## Markdown __rulez__!
  ---
  
  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  let a = "string";
  \`\`\`
  
  ### Lists
  1. Ordered list
  2. Another bullet point
    - Unordered list
    - Another unordered bullet point
  
  ### Blockquote
  > Blockquote to the max`;
}
