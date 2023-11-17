import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  backgroundImages: string[] = [
    'https://images.pexels.com/photos/908339/pexels-photo-908339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1868692/pexels-photo-1868692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2925322/pexels-photo-2925322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  cameraPosts: Post[] = [];
  lensPosts: Post[] = [];
  photographyPosts: Post[] = [];
  filmmakingPosts: Post[] = [];
  currentImageIndex = 0;

  showCameraPosts: boolean = false;
  showLensPosts: boolean = false;
  showPhotographyPosts: boolean = false;
  showFilmmakingPosts: boolean = false;


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // Fetch the last three posts for each category
    this.cameraPosts = this.postService.getRecentPostsByCategory('cameras');
    this.lensPosts = this.postService.getRecentPostsByCategory('lenses');
    this.photographyPosts = this.postService.getRecentPostsByCategory('photography');
    this.filmmakingPosts = this.postService.getRecentPostsByCategory('filmmaking');

    // Set interval to change background image every 3 seconds
    setInterval(() => {
      this.changeBackgroundImage();
    }, 3000);
  }

  changeBackgroundImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
  }
}
