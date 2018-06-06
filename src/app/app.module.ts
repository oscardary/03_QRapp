import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { HistoryPage, HomePage, MapsPage, TabsPage } from '../pages/index.page';

//Services
import { HistoryProvider } from '../providers/history/history';

//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    //HomePage
    HistoryPage, HomePage, MapsPage, TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBF8H5fZwfvI-E5Z-PpXb6GdGUkDZ7p4rs'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage
    HistoryPage, HomePage, MapsPage, TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistoryProvider
  ]
})
export class AppModule {}
