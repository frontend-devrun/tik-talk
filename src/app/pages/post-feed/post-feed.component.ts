import { Component } from '@angular/core';
import { PostInputComponent } from "../post-input/post-input.component";

@Component({
  selector: 'app-post-feed',
  imports: [PostInputComponent],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss'
})
export class PostFeedComponent {

}
