import { Component, signal } from '@angular/core';
import { SvgIconComponent } from '@tik-talk/common-ui';
import { Dnd } from '@tik-talk/common-ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tik-talk-avatar-upload',
  imports: [SvgIconComponent, Dnd, FormsModule],
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss',
})
export class AvatarUploadComponent {
  public readonly preview = signal<string>(
    '/assets/imgs/avatar-placeholder.jpg'
  );

  public avatar: File | null = null;

  public fileBrowserHandler(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (!file || !file.type.match('image/jpeg')) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      this.preview.set(event.target?.result?.toString() ?? '');
    };

    reader.readAsDataURL(file);
  }

  public onFiledDropped(file: File) {
    this.processFile(file);
  }

  public processFile(file: File | null) {
    if (!file || !file.type.match('image/jpeg')) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      this.preview.set(event.target?.result?.toString() ?? '');
    };
    reader.readAsDataURL(file);
    this.avatar = file;
  }
}
