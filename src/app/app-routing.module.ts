import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackEndComponent } from "./pages/back-end/back-end.component";
import { BasisComponent } from './pages/basis/basis.component';
import { FrontEndComponent} from "./pages/front-end/front-end.component";
import { GithubComponent } from "./pages/github/github.component";
import { HomeComponent } from "./pages/home/home.component";
import { IdeaComponent } from "./pages/idea/idea.component";
import { ToolsComponent } from "./pages/tools/tools.component";


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
    component: BackEndComponent
  },{
    path: "frontend",
    component: FrontEndComponent
  },{
    path: "idea",
    component: IdeaComponent
  },{
    path: "github",
    component: GithubComponent
  },{
    path: "tools",
    component: ToolsComponent
  },{
    path: "basis",
    component: BasisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
