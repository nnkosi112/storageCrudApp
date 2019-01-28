import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
      {
        path: 'tabs',
        component:TabsComponent,
        children:[
          {
             path:'',
             redirectTo: './(home:home)',
             pathMatch: 'full',            
          },
          {
             path:'home',
             outlet: 'home',
             component: HomePage,
          }
        ]
      },
      {
         path:'',
         redirectTo: '/tabs/(home:home)',
         pathMatch: 'full',
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
