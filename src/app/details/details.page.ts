import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

   
  items: Item[] = [];
 
  newItem: Item = <Item>{};
 
  @ViewChild('mylist')mylist: IonList;
 
  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  
  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }
  
  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
      //duration: 2000
    });
    toast.present();
  }


  ngOnInit() {
  }

}
