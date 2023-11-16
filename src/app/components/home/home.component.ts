// home.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  backgroundImages: string[] = [
    'https://images.pexels.com/photos/908339/pexels-photo-908339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2675878/pexels-photo-2675878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  currentImageIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.changeBackgroundImage();
    }, 3000);
  }

  changeBackgroundImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
  }
}
