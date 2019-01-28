import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {
  items: Item[] = [];
 
  newItem: Item = <Item>{};
 
  @ViewChild('mylist')mylist: IonList;
  
  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  
  // DELETE
  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Employee profile deleted!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or splice it from the array directly
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
