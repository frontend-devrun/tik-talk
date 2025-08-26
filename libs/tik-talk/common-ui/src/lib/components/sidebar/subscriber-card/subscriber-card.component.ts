import { Component, Input } from '@angular/core';
import { IProfile } from '@tik-talk/data-access-api';
import { ImgUrlPipe } from '@tik-talk/pipe';

@Component({
  selector: 'tik-talk-subscriber-card',
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss',
})
export class SubscriberCardComponent {
  @Input() profile!: IProfile;
}
