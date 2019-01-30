import { Component, OnInit,ViewChild } from '@angular/core';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  items: Item[] = [];
 
  newItem: Item = <Item>{};
 
  @ViewChild('mylist')mylist: IonList;
  
  /*constructor(public navCtrl: NavController, private storageService: StorageService) {
        this.searchControl = new FormControl();
    }*/
    
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
  /*ionViewDidLoad() {

        this.setFilteredItems();

        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

            this.searching = false;
            this.setFilteredItems();

        });


    }
  
  onSearchInput(){
        this.searching = true;
    }

    setFilteredItems() {

        this.items = this.dataService.filterItems(this.searchTerm);

    }*/
  
  ngOnInit() {
  }

}
