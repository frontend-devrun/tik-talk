import { Component, input } from '@angular/core';
import { IProfile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-profile-header',
  imports: [],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  profile = input<IProfile>()
}
