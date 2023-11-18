import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.model';


@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];

  constructor() {
    this.loadPostsFromLocalstorage();
  }

  getPosts(): Post[] {
    return this.posts;
  }

  getPostsByCategory(category: string): Post[] {
    return this.posts.filter(post => post.category === category);
  }

  getRecentPostsByCategory(category: string, limit: number = 3): Post[] {
    const posts = this.getPostsByCategory(category);
    return posts.slice(-limit);
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePostsToLocalstorage();
  }

  private savePostsToLocalstorage() {
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  loadPostsFromLocalstorage() {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    }
  }

  getLastPost(): Post | undefined {
    return this.posts.length > 0 ? this.posts[this.posts.length - 1] : undefined;
  }

  deletePost(postId: number) {
    this.posts = this.posts.filter(post => post.id !== postId);
    this.savePostsToLocalstorage();
  }
}
