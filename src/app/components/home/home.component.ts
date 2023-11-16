import { Component, OnInit } from '@angular/core';

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
