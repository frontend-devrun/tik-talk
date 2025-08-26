import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '@tik-talk/common-ui';

@Component({
  selector: 'lib-layout',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
