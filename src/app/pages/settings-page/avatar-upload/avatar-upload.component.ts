import { Component, signal } from '@angular/core';
import { SvgIconComponent } from '../../../common-ui/svg-icon/svg-icon.component';
import { Dnd } from '../../../common-ui/directives/dnd';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avatar-upload',
  imports: [SvgIconComponent, Dnd, FormsModule],
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss'
})
export class AvatarUploadComponent {

  preview = signal<string>('/assets/imgs/avatar-placeholder.jpg')

  avatar: File | null = null

  fileBrowserHandler(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0]

    if (!file || !file.type.match('image/jpeg')) return

    const reader = new FileReader()

    reader.onload = event => {
      this.preview.set(event.target?.result?.toString() ?? '')
    }

    reader.readAsDataURL(file)
  }


  onFiledDropped(file: File) {
    this.processFile(file)
  }

  processFile(file: File | null) {
    if (!file || !file.type.match('image/jpeg')) return
    const reader = new FileReader()
    reader.onload = event => {
      this.preview.set(event.target?.result?.toString() ?? '')
    }
    reader.readAsDataURL(file)
    this.avatar = file
  }
}
