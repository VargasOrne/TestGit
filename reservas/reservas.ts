import { Component } from '@angular/core';
//import { TranslateService } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { Time } from '@angular/common';


@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
})
//Probando reservas
export class ReservasPage {
  account: {name: string, surname: string, telephone:number, date: Date, time:Time, person:number} = {
    name:('nombre'),
    surname: ('apellido'),
    telephone:("379xxx"),
    date:('dia/mes'),
    time:('hh:mm'),
    person:("0")

  };

  // private reservaErrorString: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {

    // this.translateService.get('No hay conexion con BD!!!!').subscribe
    // ((value) => {this.reservaErrorString = value;
    // })
  }
  

   ionViewDidLoad() {
     console.log('ionViewDidLoad ReservasPage');
   }
  }

