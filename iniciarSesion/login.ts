import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage} from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

//probando Usuario
export class LoginPage{

  account:{username: string, password:string}={
     username:'usuario',  password:'contraseña'
  };

  //llama a registro
  goToSignup(){
    this.navCtrl.push('SignupPage');
   }

  // Our translated text strings
  private loginErrorString: string;

  constructor(
    public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService){
   }

    // Intentar iniciar sesión a través de nuestro servicio de usuario
     doLogin() {
     this.user.login(this.account).subscribe((resp) => {
       this.navCtrl.push(MainPage)
         }, (err) => {
         this.navCtrl.push(MainPage);
      
      // Incapaz de iniciar sesión
      let toast = this.toastCtrl.create({
      message: this.loginErrorString,
         duration: 3000,
         position: 'top'
       });
      toast.present();
     });  
    } 
  } 
