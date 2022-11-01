import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {}

  public set(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public get(key: string) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) ?? '');
    } else {
      return undefined;
    }
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
}
