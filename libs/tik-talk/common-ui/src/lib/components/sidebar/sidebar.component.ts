import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { RouterModule } from '@angular/router';
import { ProfileService } from '@tik-talk/data-access-api';
import { firstValueFrom } from 'rxjs';
import { ImgUrlPipe } from '@tik-talk/pipe';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'tik-talk-sidebar',
  imports: [
    AsyncPipe,
    NgFor,
    RouterModule,
    SubscriberCardComponent,
    ImgUrlPipe,
    SvgIconComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  public readonly profileService = inject(ProfileService);

  public readonly subscribers$ = this.profileService.getSubscribersShortList();

  me = this.profileService.getMe();

  menuItems = [
    { label: 'Моя страница', icon: 'home', link: 'profile/me' },
    { label: 'Чаты', icon: 'chats', link: 'chats' },
    { label: 'Поиск', icon: 'search', link: 'search' },
  ];

  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
