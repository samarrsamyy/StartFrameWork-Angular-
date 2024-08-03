import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path:'', component:HomeComponent , title:'Home'},
  { path:'about', component:AboutComponent , title:'About'},
  { path:'contact', component:ContactComponent , title:'Contact'},
  { path:'portfolio', component:PortfolioComponent , title:'Portfolio'},
  { path: '**', component: NotfoundComponent , title:'not found page' }

];
