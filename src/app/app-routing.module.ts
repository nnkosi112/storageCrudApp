import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'delete', loadChildren: './delete/delete.module#DeletePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
