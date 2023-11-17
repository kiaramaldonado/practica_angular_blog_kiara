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
}