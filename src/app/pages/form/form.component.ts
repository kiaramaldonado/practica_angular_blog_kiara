// form.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.model';
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

  constructor(private postService: PostService) { }

  onSubmit() {
    // Get the last post's id
    const lastPost = this.postService.getLastPost();

    // Set the new post's id
    this.newPost.id = lastPost ? lastPost.id + 1 : 1;

    // Add the new post to the service
    this.postService.addPost(this.newPost);

    // Clear the form after submission
    this.newPost = {
      id: 0,
      title: '',
      excerpt: '',
      category: 'cameras',
      thumbnail: '',
      body: '',
      publishDate: new Date(),
      author: 'Your Name'
    };
  }
}
