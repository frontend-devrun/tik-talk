import { Component, Input } from '@angular/core';

@Component({
  selector: 'tik-talk-svg[icon]',
  imports: [],
  template: `
    <svg [attr.width]="size" [attr.height]="size">
      <use [attr.href]="href" [attr.xlink:href]="href"></use>
    </svg>
  `,
  styles: [``],
})
export class SvgIconComponent {
  @Input() icon = '';
  @Input() size: string | number = '1em';
  get href() {
    return `/assets/svg/${this.icon}.svg#${this.icon}`;
  }
}
