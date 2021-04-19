import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { ApiClientService } from 'src/app/services/api-client.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-inscribe',
  templateUrl: './inscribe.page.html',
  styleUrls: ['./inscribe.page.scss'],
})
export class InscribePage implements OnInit {

  inscribeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private loadingController: LoadingController,
    private navController: NavController,
    private apiClient: ApiClientService
  ) {
    this.inscribeForm = this.formBuilder.group({
      alias: ['', Validators.required],
      type: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      bankingEntity: ['', Validators.required],
      currency: ['', Validators.required],
      identification: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
    });
  }

  ngOnInit() {
  }

  async inscribe() {
    const loading = await this.loadingController.create();
    await loading.present();
    try {
      await this.apiClient.post('/third-party-accounts/inscribe', {
        alias: this.inscribeForm.value.alias,
        type: this.inscribeForm.value.type,
        number: Number(this.inscribeForm.value.number),
        bankingEntity: this.inscribeForm.value.bankingEntity,
        currency: this.inscribeForm.value.currency,
        identification: Number(this.inscribeForm.value.identification)
      });
      await loading.dismiss();
      await this.sharedService.presentToast({ message: 'Cuenta inscrita correctamente' });
      this.navController.back();
    } catch (error) {
      await loading.dismiss();
      await this.sharedService.presentToast({ message: error.message, color: 'danger' });
    }
  }

}
