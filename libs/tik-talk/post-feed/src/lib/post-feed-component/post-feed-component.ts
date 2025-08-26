import { Component } from '@angular/core';
import { PostInputComponent } from '@tik-talk/post-input-component';
import { PostComponent } from '@tik-talk/post-component';

@Component({
  selector: 'post-feed',
  imports: [PostInputComponent, PostComponent],
  templateUrl: './post-feed-component.html',
  styleUrl: './post-feed-component.scss',
})
export class PostFeedComponent {}
