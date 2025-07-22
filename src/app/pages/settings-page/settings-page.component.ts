import { Component, effect, inject } from '@angular/core';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from '../../common-ui/svg-icon/svg-icon.component';
import { ProfileService } from '../../data/services/ProfileService';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-settings-page',
  imports: [ProfileHeaderComponent, ReactiveFormsModule, SvgIconComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {
  fb = inject(FormBuilder)
  profileService = inject(ProfileService)

  form = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    username: [{ value: "", disabled: true }, Validators.required],
    description: [''],
    stack: ['']
  })


  constructor() {
    effect(() => {
      this.profileService.getMe().subscribe(profile => {
        //@ts-ignore
        return this.form.patchValue(
          {
            ...profile,
            stack: this.mergeStack(this.profileService.me.stack)
          });
      })
    })
  }

  onSave() {
    this.form.markAllAsTouched()
    this.form.updateValueAndValidity()
    if (this.form.invalid) return
    //@ts-ignore
    firstValueFrom(this.profileService.patchProfile({ ...this.form.value, stack: this.splitStack(this.form.value.stack) }))
  }


  splitStack(stack: string | null | string[]): string[] {
    if (!stack) return []
    if (Array.isArray(stack)) return stack
    return stack.split(',')
  }

  mergeStack(stack: string | null | string[]) {
    if (!stack) return ''
    if (Array.isArray(stack)) return stack.join(',')
    return stack
  }
}
