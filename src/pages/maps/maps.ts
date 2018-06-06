import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  lat: number;
  lng: number;

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    // this.lat = 6.348801;    6.348801,-75.515567;
    // this.lng = -75.515567;

    // console.log( this.navParams.get('xy') );

    let xy = (this.navParams.get('xy')).split(',');

    this.lat = Number( xy[0].replace('geo:','') );
    this.lng = Number( xy[1] );

    console.log(this.lng, this.lat);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }

  fnCloseModal() {
    this.viewCtrl.dismiss();
  }

}
