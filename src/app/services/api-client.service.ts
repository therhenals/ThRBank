import { Injectable } from '@angular/core';
//Axios
import axios from 'axios';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

import { environment } from 'src/environments/environment';

import { AngularFireAuth } from '@angular/fire/auth';

import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private axiosClient: AxiosInstance;

  constructor(
    private fireAuth: AngularFireAuth
  ) {
    this.init();
  }

  async init() {
    this.axiosClient = axios.create({
      baseURL: environment.baseURL
    });
    this.axiosClient.interceptors.request.use(async (config) => {
      const user = await this.fireAuth.authState.pipe(first()).toPromise();
      config.headers = {
        authorization: user ? await user.getIdToken(true) : ''
      }
      return config;
    });
    this.axiosClient.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      return Promise.reject(error.response.data);
    });
  }

  async get<type>(url: string, config?: AxiosRequestConfig): Promise<any> {
    try {
      return (await this.axiosClient.get<type>(url, config)).data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async post(url: string, body: {}, config?: AxiosRequestConfig): Promise<any> {
    try {
      return (await this.axiosClient.post(url, body, config)).data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

}
