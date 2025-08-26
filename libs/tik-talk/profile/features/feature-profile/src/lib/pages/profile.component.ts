import { Component, inject, Input } from '@angular/core';
import { ProfileHeaderComponent } from '@tik-talk/common-ui';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { IProfile } from '@tik-talk/data-access-api';
import { AsyncPipe } from '@angular/common';
import { SvgIconComponent } from '@tik-talk/common-ui';

import { ImgUrlPipe } from '@tik-talk/pipe';
import { PostFeedComponent } from '@tik-talk/post-feed-component';

import { ProfileService } from '@tik-talk/data-access-api';

@Component({
  selector: 'tik-talk-profile',
  imports: [
    SvgIconComponent,
    ProfileHeaderComponent,
    AsyncPipe,
    RouterLink,
    ImgUrlPipe,
    PostFeedComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfilePageComponent {
  public readonly profileService = inject(ProfileService);

  @Input() profile!: IProfile;

  public readonly subscribers$ = this.profileService.getSubscribersShortList(5);

  private readonly route = inject(ActivatedRoute);

  public readonly profile$ = this.route.params.pipe(
    switchMap(({ id }) => {
      if (id === 'me' && this.profileService.me) {
        return of(this.profileService.me);
      }
      return this.profileService.getAccount(id);
    })
  );
}
