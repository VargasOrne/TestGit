import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    translate: TranslateService,
    public platform: Platform) {
    this.dir = platform.dir();

    //muestra los slider de las imagenes que no son necesaria 
    // translate.get([
    //   // ["SLIDE1",
    //   // "SLIDE1_DESCRIPTION",
    //   // "SLIDE2",
    //   // "SLIDE2_DESCRIPTION",
    //   // "SLIDE3",
    //   // "SLIDE3_DESCRIPTION",
    // ]).subscribe(
    //   (values) => { console.log('Loaded values', values);
    //     this.slides = [{
    //       //   title: values.SLIDE1,
    //       //   description: values.SLIDE1_DESCRIPTION,
    //       //   image: 'assets/img/img-coffe.jpg',
    //       // },
    //       // {
    //       //   title: values.SLIDE2,
    //       //   description: values.SLIDE2_DESCRIPTION,
    //       //   image: 'assets/img/images.jpg',
    //       // },
    //       // {
    //       //   title: values.SLIDE3,
    //       //   description: values.SLIDE3,
    //       //   image: 'assets/img/images1.jpg',
    //       // }
    //     ];
    //   });
  }

  //aqui llama a welcomePage - Bienvenidos
  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
