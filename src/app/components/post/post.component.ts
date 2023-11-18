import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.model';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post!: Post;

  constructor(private router: Router) { }

  navigateToPostDetail(category: string, postId: number) {
    this.router.navigate([category, postId]);
  }
}
