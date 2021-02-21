import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
//import SplashScreen from 'react-native-splash-screen';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  componentes:Observable<Componente[]>;


  ngOnInit() {
    this.componentes=this.dataService.getMenuOpts();
  }

  constructor(private platform:Platform,

              private splashScreen: SplashScreen,
              private statusBar:StatusBar,
              private menuCtrl:MenuController,
              private dataService:DataService) {
                this.initializeApp();
               }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.componentes=this.dataService.getMenuOpts();
    })
  }

}
