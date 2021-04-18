import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  actions = [
    {
      name: 'Mis cuentas',
      icon: 'cash',
      page: 'tabs/accounts',
      direction: 'root'
    },
    {
      name: 'Inscribir cuentas',
      icon: 'save'
    },
    {
      name: 'Transferir con QR',
      icon: 'qr-code'
    }
  ];

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  async goTo(path: string, direction: string) {
    console.log(path, direction)
    try {
      if (direction == 'root') {
        this.navController.navigateRoot(path);
      } else {
        this.navController.navigateForward(path);
      }
    } catch (error) {

    }
  }

}
