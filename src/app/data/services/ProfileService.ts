import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProfile } from '../interfaces/profile.interface';
import { IPageble } from '../interfaces/pageble.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  http = inject(HttpClient)


  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseApiUrl}account/test_accounts`)
  }

  getSubscribersShortList() {
    return this.http.get<IPageble<IProfile>>(`${this.baseApiUrl}account/subscribers/`)
      .pipe(
        map(res => res.items.slice(0, 3))
      )
  }

  getMe() {
    return this.http.get<IProfile>(`${this.baseApiUrl}account/me`)
  }

}
