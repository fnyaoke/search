import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path:"aboutDeveloper", component: AboutComponent },
  { path:"search", component: SearchComponent},
  { path: '', redirectTo:"search", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
