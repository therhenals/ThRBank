import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private toastController: ToastController
  ) { }

  async presentToast(data: { message: string, duration?: number, color?: string }) {
    const toast = await this.toastController.create({
      message: data.message,
      duration: data.duration || 3000,
      color: data.color,
      buttons: ['OK']
    });
    toast.present();
  }

}
