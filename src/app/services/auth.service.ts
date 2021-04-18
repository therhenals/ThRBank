import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//Ionic
import { NavController } from '@ionic/angular';
//Interfaces
import { LoginResultInterface } from '../interfaces/login-result.interface';
import { ProfileInterface } from '../interfaces/profile.interface';
//Services
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  profile: ProfileInterface;

  constructor(
    private apiClient: ApiClientService,
    private angularFireAuth: AngularFireAuth
  ) { }


  async login(username: string, password: string): Promise<void> {
    try {
      const auth: LoginResultInterface = await this.apiClient.post('auth/login', {
        username, password
      });
      await this.angularFireAuth.signInWithCustomToken(auth.token);
      this.profile = await this.getProfile();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProfile() {
    try {
      return await this.apiClient.get<ProfileInterface>('auth/me');
    } catch (error) {
      return Promise.reject(error);
    }
  }

  authState() {
    return this.angularFireAuth.authState;
  }

  async signOut() {
    await this.angularFireAuth.signOut();
  }

}
