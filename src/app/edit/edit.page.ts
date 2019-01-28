import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  items: Item[] = [];
 
  newItem: Item = <Item>{};
 
  @ViewChild('mylist')mylist: IonList; 
  
  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  
  // UPDATE
  updateItem(item: Item) {
    item.title = `UPDATED: ${item.title}`;
    item.modified = Date.now();
 
    this.storageService.updateItem(item).then(item => {
      this.showToast('Employee profile updated!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or update it inside the array directly
    });
  }
  
  
  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }
  
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
