import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IProfile } from '../interfaces/profile.interface';
import { IPageble } from '../interfaces/pageble.interface';
import { map, tap } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  http = inject(HttpClient)


  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  me!: IProfile

  filteredProfiles = signal<IProfile[]>([])

  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseApiUrl}account/test_accounts`)
  }

  getMe() {
    return this.http.get<IProfile>(`${this.baseApiUrl}account/me`).pipe(
      tap(res => this.me = res)
    )
  }

  getAccount(account_id: string) {
    return this.http.get<IProfile>(`${this.baseApiUrl}account/${account_id}`)
  }

  getSubscribersShortList(subsAmount = 3) {
    return this.http.get<IPageble<IProfile>>(`${this.baseApiUrl}account/subscribers/`)
      .pipe(
        map(res => res.items.slice(0, subsAmount))
      )
  }

  patchProfile(profile: Partial<IProfile>) {
    return this.http.patch<IProfile>(`${this.baseApiUrl}account/me`, profile)
  }


  uploadAvatar(file: File) {

    const fd = new FormData()
    fd.append("image", file)
    return this.http.post<IProfile>(`${this.baseApiUrl}account/upload_image`, fd)
  }

  filterProfiles(params: Record<string, any>) {
    return this.http.get<IPageble<IProfile>>(`${this.baseApiUrl}account/accounts`,
      { params })
      .pipe(
        tap(res => this.filteredProfiles.set(res.items))
      )
  }

}
