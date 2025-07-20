import { Component, Input } from '@angular/core';
import { IProfile } from '../../../data/interfaces/profile.interface';
import { ImgUrlPipe } from "../../../helpers/pipes/img-url-pipe";

@Component({
  selector: 'app-subscriber-card',
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss'
})
export class SubscriberCardComponent {
  @Input() profile!: IProfile
}
