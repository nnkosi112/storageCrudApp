import { Component, OnInit,ViewChild } from '@angular/core';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  items: Item[] = [];
 
  newItem: Item = <Item>{};
 
  @ViewChild('mylist')mylist: IonList;
 
  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
 
  // CREATE
  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();
 
    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      this.showToast('Employee profile added!')
      this.loadItems(); // Or add it to the array directly
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
