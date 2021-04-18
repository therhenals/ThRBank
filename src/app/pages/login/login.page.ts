import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private loadingController: LoadingController
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    try {
      await this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
      await loading.dismiss();
    } catch (error) {
      await this.sharedService.presentToast({ message: error.message, duration: 3000, color: 'danger' })
      await loading.dismiss();
    }
  }

}

