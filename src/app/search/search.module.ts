import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { StorageService, Item } from '../services/storage.service';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchPage],
  //bootstrap: [IonicApp],
  /*providers: [
    statusbar,
    SplashScreen,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler} 
  ]*/
})
export class SearchPageModule {}
