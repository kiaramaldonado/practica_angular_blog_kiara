import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica_angular_blog_kiaraDEF';

  constructor(private postService: PostService) {
    this.postService.loadPostsFromLocalstorage();
  }
}
