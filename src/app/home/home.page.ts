import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  async showMessage() {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'wena po',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
