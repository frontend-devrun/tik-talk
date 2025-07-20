import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/ProfileService';
import { IProfile } from '../../data/interfaces/profile.interface';
import { ProfileCard } from "../../common-ui/profile-card/profile-card";

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  ProfileService = inject(ProfileService)

  profiles: IProfile[] = []

  constructor() {
    this.ProfileService.getTestAccounts().
      subscribe((val) => {
        this.profiles = val
      })
  }

}
