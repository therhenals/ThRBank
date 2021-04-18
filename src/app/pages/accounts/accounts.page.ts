import { Component, OnInit } from '@angular/core';
import { AccountInterface } from 'src/app/interfaces/account.interface';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  accounts: AccountInterface[];

  constructor(
    private apiClient: ApiClientService
  ) { }

  async ngOnInit() {
    this.accounts = await this.apiClient.get('accounts/all');
  }

}
