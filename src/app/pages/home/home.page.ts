import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfileInterface } from 'src/app/interfaces/profile.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  profile: ProfileInterface;

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
    private navController: NavController,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    this.profile = await this.authService.getProfile();
  }

  async goTo(path: string, direction: string) {
    try {
      if (direction == 'root') {
        this.navController.navigateRoot(path);
      } else {
        this.navController.navigateForward(path);
      }
    } catch (error) {

    }
  }

  async signOut() {
    await this.authService.signOut();
  }

}
