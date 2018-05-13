import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/*
  Generated class for the NotificationsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsServiceProvider {

  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    console.log('Hello NotificationsServiceProvider Provider');
  }


  showToast(message: string, duration: number = 3000, position: string = 'top'): any {
    return this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    }).present();
  }

  showLoading(message: string, spinner: string = 'ios'): any {
    return this.loadingCtrl.create({
      content: message,
      spinner: spinner
    });
  }

  showAlert(message: string, title: string="Information", buttons:string[] = ['OK'] ): any {
    return this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: buttons
    }).present();
  }
  
}
