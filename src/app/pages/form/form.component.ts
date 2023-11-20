import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.model';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newPost: Post = {
    id: 0,
    title: '',
    excerpt: '',
    category: 'cameras',
    thumbnail: '',
    body: '',
    publishDate: new Date(),
    author: ''
  };

  constructor(private postService: PostService, private router: Router) { }

  onSubmit() {
    const lastPost = this.postService.getLastPost();
    this.newPost.id = lastPost ? lastPost.id + 1 : 1;
    this.postService.addPost(this.newPost);

    this.router.navigate([this.newPost.category + '/' + this.newPost.id]);

    this.newPost = {
      id: 0,
      title: '',
      excerpt: '',
      category: 'cameras',
      thumbnail: '',
      body: '',
      publishDate: new Date(),
      author: ''
    };

  }
}
