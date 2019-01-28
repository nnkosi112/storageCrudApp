import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsRoutingModule } from './tabs-routing.module';
import { HomePageModule } from '../home/home.module';
import { TabsComponent } from './tabs.component';
import { EditPageModule } from '../edit/edit.module';
import { DetailsPageModule } from '../details/details.module';
import { AddPageModule } from '../add/add.module';
import { DeletePageModule } from '../delete/delete.module';
import { SearchPageModule } from '../search/search.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    IonicModule,
    CommonModule,
    TabsRoutingModule,
    HomePageModule,EditPageModule,
    DetailsPageModule,
    AddPageModule,
    DeletePageModule,
    SearchPageModule
  ]
})
export class TabsModule { }
