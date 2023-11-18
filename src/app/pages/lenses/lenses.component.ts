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
}
