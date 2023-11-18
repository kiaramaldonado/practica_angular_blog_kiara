import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.model';


@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Exploring the Latest Canon Camera: CANON EOS R8',
      excerpt: 'Discover the features and capabilities of the newest Canon camera in the market.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'cameras',
      publishDate: new Date(),
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Mastering the Art of Portrait Photography',
      excerpt: 'Learn essential tips and techniques for capturing stunning portraits.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'photography',
      publishDate: new Date(),
      author: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Choosing the Right Lens for Your Photography Style',
      excerpt: 'A guide to selecting the perfect lens to enhance your photography.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'lenses',
      publishDate: new Date(),
      author: 'Alice Johnson',
    },
    {
      id: 4,
      title: 'The World Through a Macro Lens',
      excerpt: 'Explore the intricate details of nature with the power of macro photography.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'lenses',
      publishDate: new Date(),
      author: 'Bob Williams',
    },
    {
      id: 5,
      title: 'Wide Angle Wonders: Landscape Photography Tips',
      excerpt: 'Capture breathtaking landscapes using the right lens and techniques.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'photography',
      publishDate: new Date(),
      author: 'Eva Rodriguez',
    },
    {
      id: 6,
      title: 'In-Depth Review: Sony Mirrorless Cameras',
      excerpt: 'An extensive review of the latest Sony mirrorless camera models.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'cameras',
      publishDate: new Date(),
      author: 'Michael Chang',
    },
    {
      id: 7,
      title: 'Creating Stunning Portraits with Natural Light',
      excerpt: 'Tips and tricks for achieving beautiful portrait shots using natural light.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'photography',
      publishDate: new Date(),
      author: 'Sophie Martin',
    },
    {
      id: 8,
      title: 'Diving into Street Photography: Urban Adventures',
      excerpt: 'Navigate the streets with your camera and capture the essence of urban life.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'photography',
      publishDate: new Date(),
      author: 'David Thompson',
    },
    {
      id: 9,
      title: 'Choosing the Perfect Lens for Astrophotography',
      excerpt: 'Unlock the mysteries of the night sky with the right lens for astrophotography.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'lenses',
      publishDate: new Date(),
      author: 'Olivia Turner',
    },
    {
      id: 10,
      title: 'Cinematic Excellence: Filmmaking Tips and Tricks',
      excerpt: 'Master the art of filmmaking with practical advice and behind-the-scenes insights.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'filmmaking',
      publishDate: new Date(),
      author: 'Ryan Carter',
    },
    {
      id: 11,
      title: 'Choosing the Right Camera for Your Film Projects',
      excerpt: 'Navigate the world of filmmaking cameras to find the perfect fit for your projects.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'cameras',
      publishDate: new Date(),
      author: 'Emily Roberts',
    },
    {
      id: 12,
      title: 'Editing Magic: Post-Production Tips for Filmmakers',
      excerpt: 'Explore advanced editing techniques to enhance the quality of your films.',
      thumbnail: 'https://m.media-amazon.com/images/I/81MfQ+acq4L._AC_UF894,1000_QL80_.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      category: 'filmmaking',
      publishDate: new Date(),
      author: 'Daniel Lee',
    },
    // Repeat similar blocks for additional posts
  ];

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
