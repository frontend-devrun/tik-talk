import { Component, inject, OnDestroy } from '@angular/core';
import { SvgIconComponent } from '@tik-talk/common-ui';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '@tik-talk/data-access-api';
import { debounceTime, startWith, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'tik-talk-profile-filters',
  imports: [ReactiveFormsModule, SvgIconComponent],
  templateUrl: './profile-filters.component.html',
  styleUrl: './profile-filters.component.scss',
})
export class ProfileFiltersComponent implements OnDestroy {
  public readonly fd = inject(FormBuilder);
  public readonly profileService = inject(ProfileService);

  public readonly searchForm = this.fd.group({
    firstName: [''],
    lastName: [''],
    city: [''],
    stack: [''],
  });

  public readonly searchFormSub!: Subscription;

  constructor() {
    this.searchFormSub = this.searchForm.valueChanges
      .pipe(
        startWith({}),
        debounceTime(300),
        switchMap((formValue) => {
          return this.profileService.filterProfiles(formValue);
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.searchFormSub.unsubscribe();
  }
}
