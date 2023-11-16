import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.model';


@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
  ];

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
}
