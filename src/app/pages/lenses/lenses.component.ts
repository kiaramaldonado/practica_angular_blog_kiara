import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-lenses',
  templateUrl: './lenses.component.html',
  styleUrls: ['./lenses.component.css']
})
export class LensesComponent implements OnInit {
  lensePosts = this.postService.getPostsByCategory('lenses');

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onFilterChanged(filterOptions: { sortOrder: string, searchTerm: string }) {
    const { sortOrder, searchTerm } = filterOptions;

    let filteredPosts = this.lensePosts;

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

    this.lensePosts = filteredPosts;
  }
}
