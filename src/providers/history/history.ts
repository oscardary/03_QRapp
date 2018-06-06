import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model'
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
import { MapsPage } from '../../pages/index.page';

@Injectable()
export class HistoryProvider {

  private _aHistory:ScanData[] = [
    {
      type: "geo",
      info: "geo:6.348799,-75.515527"
    },
    {
      type: "geo",
      info: "geo:6.338733,-75.521818"
    },
    {
      type: "geo",
      info: "geo:6.349033,-75.503885"
    }
  ];  //Almacena todos los codigos QR leidos

  constructor(
    private iab: InAppBrowser,
    private modalCtrl: ModalController
  ) {
    console.log('Hello HistoryProvider Provider');
  }

  /**
   * Adiciona la última posición leída a la primera posición
   * del array 
   * @param sTexto URL leída en el código QR
   */
  fnAdicionarHistorial(sTexto:string){
    //Valida el texto leido y lo retorna en forma de objeto ScanData
    let data = new ScanData(sTexto);
    //Adiciona el objeto a la primera posición del array
    this._aHistory.unshift(data);

    console.log(this._aHistory);
    //Abre la última posición del array
    this.fnAbrirHistorial(0);
  }

  /**
   * Recibe una posición del array y segun el tipo ejecuta una acción
   * @param index posicion del array seleccionada
   */
  fnAbrirHistorial(index:number){
    let ScanData = this._aHistory[index];
    console.log('Abrir: ' + ScanData);

    switch (ScanData.type) {
      case "http":
        //Abre el navegador predeterminado en el dispositivo y abre el link indicado
        this.iab.create(ScanData.info, '_system');
        break;
      case "geo":
        //Abre la pagina de mapas y se posiciona en la LON y LAT correspondiente
        this.modalCtrl.create(MapsPage, { xy: ScanData.info })
          .present();
        break;
      default:
        console.log('Error al abrir link.');
        break;
    }
  }

  /**
   * Lee el array con los código QR leido anteriormente
   */
  fnLeerHistorial(){
    return this._aHistory;
  }

}
