import { Component, inject } from '@angular/core';

import { ProfileService } from '@tik-talk/data-access-api';
import { ProfileCard } from '@tik-talk/common-ui';
import { ProfileFiltersComponent } from '../components/profile-filters/profile-filters.component';

@Component({
  selector: 'tik-talk-search',
  imports: [ProfileCard, ProfileFiltersComponent],
  templateUrl: './search-component.html',
  styleUrl: './search-component.scss',
})
export class SearchPageComponent {
  public readonly profileService = inject(ProfileService);

  public readonly profiles = this.profileService.filteredProfiles;
}
