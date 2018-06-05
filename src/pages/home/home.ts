import { Component } from '@angular/core';
//Component
import { ToastController, Platform } from 'ionic-angular';
//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//Services
import { HistoryProvider } from '../../providers/history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController,
    private platform: Platform,
    private historyProvider: HistoryProvider
  ) {

  }

  /**
   * Funcion para llamar la opción del Scanner de Codigo QR, 
   * leer los datos del código y almacenarlos de forma local.
   */
  fnScann(){
    //Valida que la plataforma en que se esta ejecutando la App NO sea un navegador web
    if(!this.platform.is('cordova')){
      //this.historyProvider.fnAdicionarHistorial("http://oscarrl.xyz");
      this.presentToast('Imposible, estas en un navegador.');
      return;
    }

    //Si es un dispositivo movil, se inicia el Scanner
    this.barcodeScanner.scan().then(barcodeData => {
      //Se leen los valores capturados en el código QR
      console.log('Barcode data', barcodeData);
      if(!barcodeData.cancelled && barcodeData.text != null){
        //Almacena el texto optenido del Código QR
        this.historyProvider.fnAdicionarHistorial(barcodeData.text);
      }
     }).catch(err => {
        //Indica error al leer Código QR
        console.error('Error', err);
        this.presentToast('=( Error: ' + err);
     });
  }

  /**
   * Muestra un mensaje de texto flotante en pantalla
   * @param sTxtMsg Texto personalizado del mensaje
   */
  presentToast(sTxtMsg:string) {
    let toast = this.toastCtrl.create({
      message: sTxtMsg,
      duration: 5000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
