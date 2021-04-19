import { Component, OnInit } from '@angular/core';
//Interfaces
import { AccountInterface } from 'src/app/interfaces/account.interface';
import { ThirdPartyAccountsInterface } from 'src/app/interfaces/third-party-accounts.interface';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiClientService } from 'src/app/services/api-client.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

  transferForm: FormGroup;
  accounts: AccountInterface[];
  thirdPartyAccounts: ThirdPartyAccountsInterface[];

  constructor(
    private formBuilder: FormBuilder,
    private navController: NavController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private apiClient: ApiClientService,
    private sharedService: SharedService
  ) {
    this.transferForm = this.formBuilder.group({
      senderAccount: ['', Validators.required],
      destinationAccount: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      amount: ['', [Validators.required,]],
    });
  }

  async ngOnInit() {
    this.accounts = await this.apiClient.get('accounts/all')
    this.thirdPartyAccounts = await this.apiClient.get('third-party-accounts/all')
  }
  async transfer() {
    const loading = await this.loadingController.create();
    try {
      const alert = await this.alertController.create({
        header: 'Confirma los datos!',

        message: `Cuenta origen: <b>${this.transferForm.value.senderAccount}</b>\n
                  Cuenta destino: <b>${this.transferForm.value.destinationAccount}</b>\n
                  Monto: <b>${this.transferForm.value.amount}</b>`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Transferir',
            handler: async () => {
              await loading.present();
              await this.apiClient.post('/transactions/create', {
                amount: Number(this.transferForm.value.amount),
                destinationAccount: Number(this.transferForm.value.destinationAccount),
                senderAccount: Number(this.transferForm.value.senderAccount)
              });
              await loading.dismiss();
              await this.sharedService.presentToast({ message: 'Transferencia realizada correctamente' });
              this.navController.back();
            }
          }
        ]
      });

      await alert.present();

    } catch (error) {
      await loading.dismiss();
      await this.sharedService.presentToast({ message: error.message, color: 'danger' });
    }
  }

}
