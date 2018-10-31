import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type

  //hay que validar esto
  account: {name: string, surname: string, email: string, username: string, password: string} = {
    name: ('nombre'),
    surname: ('apellido'),
    email: ('email@gmail.com'),
    username: ('probando123 '),
    password: ('123')
  };

  // nuestra cadena de texto traducida
 private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('No hay conexion con la Base de Datos!!!!').subscribe
    ((value) => {this.signupErrorString = value;
    })
  }
  
// //cuando se registra que vaya al menu
//     doSignup(){
//       this.navCtrl.push();
//     }


//no se bien que hace
  doSignup() {
    // Attempt to login in through our User service
   this.user.signup(this.account).subscribe((resp) => {
     this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);


   //Unable to sign up
     let toast = this.toastCtrl.create({
        message: this.signupErrorString,
       duration: 3000,
         position: 'top'
      });
      toast.present();
    });
  }
 
}