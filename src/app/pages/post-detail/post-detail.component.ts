// post-details.component.ts

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  post: Post | undefined;

  activatedRoute = inject(ActivatedRoute);
  seriesService = inject(PostService);

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.post = this.seriesService.getPostById(parseInt(params['postId']));
    });
  }
}
