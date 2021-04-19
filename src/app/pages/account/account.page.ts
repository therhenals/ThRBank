import { Component, OnInit } from '@angular/core';
//Interfaces
import { AccountInterface } from 'src/app/interfaces/account.interface';
import { TrasactionInterface } from 'src/app/interfaces/transaction.interface';
//Services
import { ApiClientService } from 'src/app/services/api-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  number: number;
  account: AccountInterface;
  transactions: TrasactionInterface;

  constructor(
    private apiClient: ApiClientService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.number = this.activatedRoute.snapshot.params.number;
    this.account = await this.apiClient.get(`/accounts/${this.number}`);
    this.transactions = await this.apiClient.get('/transactions/all', {
      params: {
        numberAccount: this.number
      }
    });
  }


  color(type: string, sender: number) {
    if (type == 'consignacion') {
      return 'primary';
    } else if (this.number == sender) {
      return 'danger';
    } else {
      return 'primary';
    }
  }
}

