import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  post: Post | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.post = this.postService.getPostById(parseInt(params['postId']));
    });
  }

  onDeletePost() {
    if (confirm('Are you sure you want to delete this post?')) {
      if (this.post) {
        const deletedCategory = this.post.category;
        this.postService.deletePost(this.post.id);
        this.router.navigate([deletedCategory]);
      }
    }
  }
}
