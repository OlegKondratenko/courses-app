import { Inject, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  window: Window;
  constructor(@Inject('Window') window: Window) {
    this.window = window;
  }

  logWindow(): void {
    console.log('window ====', window);
  }

  setToken(token: string | undefined): void {
    this.window.sessionStorage.setItem('token', token || '');
  }

  getToken(): string | null {
    return this.window.sessionStorage.getItem('token');
  }

  deleteToken(): void {
    this.window.sessionStorage.removeItem('token');
  }
}
