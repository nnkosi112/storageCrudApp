import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appMenu = [
    {title:'Search', url: '/search', icon: 'search'},
    {title:'Add', url: '/add', icon: 'add'},
    {title:'Delete', url: '/delete', icon: 'trash'},
    {title:'Update', url: '/edit', icon: 'create'},
    {title:'List', url: '/details', icon: 'list'}
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
