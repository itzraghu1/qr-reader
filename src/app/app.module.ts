import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResultPage } from '../pages/result/result';



@NgModule({
  declarations: [
  MyApp,
  HomePage,
  ResultPage
  ],
  imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  ResultPage
  ],
  providers: [
  StatusBar,
  QRScanner,
  UniqueDeviceID,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
