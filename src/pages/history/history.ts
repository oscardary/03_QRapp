import { Component } from '@angular/core';
import { HistoryProvider } from '../../providers/history/history';
import { ScanData } from '../../models/scan-data.model';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  aHistorial:ScanData[] = [];

  constructor(
    private historyProvider: HistoryProvider
  ) {}

  /**
   * Función que se ejecuta al momento de cargar la vista
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    //Obtener todos los datos que se han leido anteriormente
    this.aHistorial = this.historyProvider.fnLeerHistorial();
  }

  /**
   * Abrir el link presionado en el lista de historial
   * @param index Valor de la posicion en la lista
   */
  fnAbrirUrl(index:number){
    this.historyProvider.fnAbrirHistorial(index);
  }

}
