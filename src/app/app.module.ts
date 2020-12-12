import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './pages/article/article.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';




import 'prismjs';

import "prismjs/components/prism-clike.min.js";
import "prismjs/components/prism-c.min.js";
import "prismjs/components/prism-cpp.min.js";

import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/components/prism-python.min.js";

import "prismjs/components/prism-css.min.js";
import "prismjs/components/prism-sass.min.js";
import "prismjs/components/prism-scss.min.js";
import "prismjs/components/prism-sql.min.js";
import "prismjs/components/prism-java.min.js";
import "prismjs/components/prism-scala.min.js";

import "prismjs/components/prism-mongodb.min.js";
import "prismjs/components/prism-go.min.js";
import "prismjs/components/prism-less.min.js";
import "prismjs/components/prism-docker.min.js";
import { HomeComponent } from './pages/home/home.component';













@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
