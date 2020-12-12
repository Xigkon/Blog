import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { ArticleComponent } from "./pages/article/article.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },{
    path: "home",
    component: HomeComponent
  },{
    path: "backend",
    component: ArticleComponent
  },{
    path: "frontend",
    component: ArticleComponent
  },{
    path: "thinking",
    component: ArticleComponent
  },{
    path: "tools",
    component: ArticleComponent
  },{
    path: "basis",
    component: ArticleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
