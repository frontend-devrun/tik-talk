import { Component, Input } from '@angular/core';
import { IProfile } from '@tik-talk/data-access-api';
import { ImgUrlPipe } from '@tik-talk/pipe';

@Component({
  selector: 'tik-talk-profile-card',
  imports: [ImgUrlPipe],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  @Input() profile!: IProfile;
}
