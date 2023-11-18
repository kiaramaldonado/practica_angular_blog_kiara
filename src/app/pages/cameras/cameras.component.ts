import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {
  cameraPosts = this.postService.getPostsByCategory('cameras');

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onFilterChanged(filterOptions: { sortOrder: string, searchTerm: string }) {
    const { sortOrder, searchTerm } = filterOptions;

    let filteredPosts = this.cameraPosts;

    if (sortOrder === 'newest') {
      filteredPosts = filteredPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    } else if (sortOrder === 'oldest') {
      filteredPosts = filteredPosts.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
    }

    if (searchTerm.trim() !== '') {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    this.cameraPosts = filteredPosts;
  }

}