import { Component, inject, Input } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { ProfileService } from '../../data/services/ProfileService';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { IProfile } from '../../data/interfaces/profile.interface';
import { AsyncPipe } from '@angular/common';
import { SvgIconComponent } from '../../common-ui/svg-icon/svg-icon.component';

import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';
import { PostFeedComponent } from '../post-feed/post-feed.component';

@Component({
  selector: 'app-profile-page',
  imports: [
    SvgIconComponent,
    ProfileHeaderComponent,
    AsyncPipe,
    RouterLink,
    ImgUrlPipe,
    PostFeedComponent,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  profileService = inject(ProfileService);

  @Input() profile!: IProfile;

  subscribers$ = this.profileService.getSubscribersShortList(5);

  route = inject(ActivatedRoute);

  profile$ = this.route.params.pipe(
    switchMap(({ id }) => {
      if (id === 'me' && this.profileService.me) {
        return of(this.profileService.me);
      }
      return this.profileService.getAccount(id);
    })
  );
}
