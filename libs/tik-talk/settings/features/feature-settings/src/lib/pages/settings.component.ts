import { Component, effect, inject, ViewChild } from '@angular/core';
import { ProfileHeaderComponent } from '@tik-talk/common-ui';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from '@tik-talk/common-ui';
import { ProfileService } from '@tik-talk/data-access-api';
import { firstValueFrom } from 'rxjs';
import { AvatarUploadComponent } from '../components/avatar-upload/avatar-upload.component';

@Component({
  selector: 'tik-talk-settings',
  imports: [
    ProfileHeaderComponent,
    ReactiveFormsModule,
    SvgIconComponent,
    AvatarUploadComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsPageComponent {
  public readonly fb = inject(FormBuilder);
  public readonly profileService = inject(ProfileService);

  @ViewChild(AvatarUploadComponent) avatarUploader!: AvatarUploadComponent;

  public readonly form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [{ value: '', disabled: true }, Validators.required],
    description: [''],
    stack: [''],
  });

  constructor() {
    effect(() => {
      this.profileService.getMe().subscribe((profile) => {
        return this.form.patchValue({
          ...profile,
          stack: this.mergeStack(this.profileService.me.stack),
        });
      });
    });
  }

  public onSave() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    if (this.form.invalid) return;

    if (this.avatarUploader.avatar) {
      firstValueFrom(
        this.profileService.uploadAvatar(this.avatarUploader.avatar)
      );
    }

    firstValueFrom(
      this.profileService.patchProfile({
        ...this.form.value,
        stack: this.splitStack(this.form.value.stack ?? []),
      })
    );
  }

  public splitStack(stack: string | null | string[]): string[] {
    if (!stack) return [];
    if (Array.isArray(stack)) return stack;
    return stack.split(',');
  }

  public mergeStack(stack: string | null | string[]) {
    if (!stack) return '';
    if (Array.isArray(stack)) return stack.join(',');
    return stack;
  }
}
