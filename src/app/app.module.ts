import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from "./pages/home/home.component";
//import {HeaderComponent} from './pages/header/header.component';

import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from "./pages/sidebar/sidebar.component";
import { FrontEndComponent} from "./pages/front-end/front-end.component";
import { BackEndComponent } from './pages/back-end/back-end.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { BasisComponent } from './pages/basis/basis.component';
import { IdeaComponent } from './pages/idea/idea.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FrontEndComponent,
    BackEndComponent,
    ToolsComponent,
    BasisComponent,
    IdeaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //  HeaderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
