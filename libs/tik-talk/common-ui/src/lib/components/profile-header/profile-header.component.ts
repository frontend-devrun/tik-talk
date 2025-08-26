import { Component, input } from '@angular/core';
import { IProfile } from '@tik-talk/data-access-api';
import { ImgUrlPipe } from '@tik-talk/pipe';

@Component({
  selector: 'tik-talk-profile-header',
  imports: [ImgUrlPipe],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  public readonly profile = input<IProfile>();
}
