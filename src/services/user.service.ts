import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROUTES } from '../utils/api/constants/routes';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}
  getUser() {
    return this.http.get(ROUTES.USER.base);
  }
}
