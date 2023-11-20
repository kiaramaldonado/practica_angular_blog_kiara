import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.model';

@Injectable({
  providedIn: 'root',
})

export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: "Top 5 Cameras for Professional Photography",
      excerpt: "Discover the best cameras in the market for professional photographers.",
      thumbnail: "https://b826082.smushcdn.com/826082/wp-content/uploads/2020/12/Nikon_Z7II_Review_DSC8586-1410x793.jpg?lossy=1&strip=1&webp=1",
      body: "Explore the top 5 cameras for professional photography. Read on to find the one that suits your needs.",
      category: "cameras",
      publishDate: new Date("2023-01-01"),
      author: "Photography Enthusiast",
    },
    {
      id: 2,
      title: "Choosing the Right Mirrorless Camera: A Guide for Beginners",
      excerpt: "New to mirrorless cameras? Learn how to pick the right one for your needs.",
      thumbnail: "https://www.popphoto.com/uploads/2021/06/25/377A3429.jpg?auto=webp&width=1440&height=960.48",
      body: "Learn how to choose the right mirrorless camera for your needs as a beginner. Happy shooting!",
      category: "cameras",
      publishDate: new Date("2023-02-15"),
      author: "Novice Photographer",
    },
    {
      id: 3,
      title: "In-Depth Review: Sony ZV-E1  - Pros and Cons",
      excerpt: "Read a detailed review of the latest Sony ZV-E1 and its strengths and weaknesses.",
      thumbnail: "https://www.sony.es/image/5ea2b3dc2d52a52f059bc44fed399935?fmt=jpeg&wid=1200&qlt=43",
      body: "Read an in-depth review of Sony ZV-E1, covering its strengths and weaknesses. Valuable insights for tech enthusiasts.",
      category: "cameras",
      publishDate: new Date("2023-03-22"),
      author: "Tech Reviewer",
    },
    {
      id: 13,
      title: "Night Photography: Best Cameras for Low-Light Shooting",
      excerpt: "Explore the challenges and techniques of capturing stunning photos in low-light conditions.",
      thumbnail: "https://pbblogassets.s3.amazonaws.com/uploads/2015/08/A7S.jpg",
      body: "Master the art of night photography and learn techniques for capturing stunning photos in low-light conditions. Elevate your skills and create mesmerizing images.",
      category: "cameras",
      publishDate: new Date("2024-01-10"),
      author: "Night Photography Expert",
    },
    {
      id: 14,
      title: "Camera Gear Essentials for Travel Photographers",
      excerpt: "Discover the must-have camera gear for capturing memorable moments during your travels.",
      thumbnail: "https://storage.googleapis.com/orms-blog/1/2021/07/screenshot-2021-07-12-at-11.31.06.png",
      body: "Planning your next travel adventure? Ensure you have the essential camera gear to capture unforgettable moments. Explore the must-haves for travel photographers.",
      category: "cameras",
      publishDate: new Date("2023-02-22"),
      author: "Travel Photography Enthusiast",
    },
    {
      id: 15,
      title: "The Evolution of Digital Cameras: A Historical Overview",
      excerpt: "Trace the evolution of digital cameras from their inception to the cutting-edge models of today.",
      thumbnail: "https://www.internethistorypodcast.com/wp-content/uploads/2016/07/New-Steve-Kelly-photo-of-Sasson-with-Camera1.jpg",
      body: "Take a journey through the history of digital cameras, exploring their evolution from the early days to the cutting-edge models available today. Gain insights into the technological advancements that shaped the industry.",
      category: "cameras",
      publishDate: new Date("2023-03-15"),
      author: "Tech Historian",
    },

    // Lenses
    {
      id: 4,
      title: "Mastering Photography: A Guide to Different Camera Lenses",
      excerpt: "Explore the world of camera lenses and learn how to choose the right one for your photography style.",
      thumbnail: "https://cdn-acjao.nitrocdn.com/nMdSvoSpgFtjtzxBBfBAoMvCGAnqkiCw/assets/images/optimized/rev-9c3469a/gillespieproductions.com/app/uploads/2022/09/Types-of-lenses-in-camera-1.jpg",
      body: "Master the art of photography by understanding different camera lenses. Choose the perfect lens for your style.",
      category: "lenses",
      publishDate: new Date("2023-04-10"),
      author: "Photography Educator",
    },
    {
      id: 5,
      title: "The Art of Bokeh: Achieving Beautiful Background Blur with Prime Lenses",
      excerpt: "Discover the magic of bokeh and learn how to create stunning background blur using prime lenses.",
      thumbnail: "https://assets.community.lomography.com/ee/afb1c9b49c96d61b660b29edcaaa6b85d10fab/704x467x2.jpg?auth=1a7493e1f079f4714fe356f3a7be4d320691c675",
      body: "Unlock the secrets of bokeh and create stunning background blur with prime lenses. Elevate your photography.",
      category: "lenses",
      publishDate: new Date("2023-05-28"),
      author: "Bokeh Enthusiast",
    },
    {
      id: 6,
      title: "Lens Maintenance Tips: Keeping Your Gear in Top Shape",
      excerpt: "Ensure the longevity of your lenses with these maintenance tips.",
      thumbnail: "https://nofilmschool.com/media-library/lens-cleaning.jpg?id=34079915&width=1245&height=700&quality=90&coordinates=0%2C158%2C0%2C158",
      body: "Discover essential tips for maintaining your camera lenses and ensuring their longevity. Keep your gear in top shape.",
      category: "lenses",
      publishDate: new Date("2023-06-15"),
      author: "Gear Care Specialist",
    },
    {
      id: 16,
      title: "Macro Photography: Exploring the Tiny World Through Your Lens",
      excerpt: "Dive into the world of macro photography and capture the intricate details of small subjects.",
      thumbnail: "https://i.natgeofe.com/n/a1483106-7dc7-4960-adc1-12c64d785eab/26208_4x3.jpg",
      body: "Explore the art of macro photography and learn how to capture the intricate details of small subjects through your lens. Unlock a new dimension of photography.",
      category: "lenses",
      publishDate: new Date("2023-04-05"),
      author: "Macro Photography Enthusiast",
    },
    {
      id: 17,
      title: "Choosing the Right Telephoto Lens for Wildlife Photography",
      excerpt: "Selecting the perfect telephoto lens to capture stunning wildlife shots in their natural habitat.",
      thumbnail: "https://s.studiobinder.com/wp-content/uploads/2019/08/What-is-a-Telephoto-Lens-Featured-StudioBinder.jpg",
      body: "Embark on a journey into wildlife photography and discover the key factors to consider when choosing the right telephoto lens. Capture stunning shots of wildlife in their natural habitat.",
      category: "lenses",
      publishDate: new Date("2023-05-18"),
      author: "Wildlife Photography Enthusiast",
    },
    {
      id: 18,
      title: "Lens Buying Guide: Tips for Building Your Ultimate Kit",
      excerpt: "Navigate the world of lenses with this comprehensive buying guide to build your ultimate kit.",
      thumbnail: "https://www.dpreview.com/files/p/articles/9162056837/2021/Lens_Lineup_1.jpeg",
      body: "Whether you're a beginner or seasoned photographer, this comprehensive lens buying guide will help you build your ultimate kit. Explore tips and recommendations for selecting lenses that suit your photography style.",
      category: "lenses",
      publishDate: new Date("2023-06-22"),
      author: "Lens Connoisseur",
    },

    // Photography
    {
      id: 7,
      title: "Capturing the Essence: The Art of Street Photography",
      excerpt: "Explore the world of street photography and learn how to capture authentic moments.",
      thumbnail: "https://independent-photo.com/wp-content/uploads/2020/09/richard-sandler-01-scaled.jpg",
      body: "Immerse yourself in the art of street photography. Capture authentic moments and tell compelling stories through your lens.",
      category: "photography",
      publishDate: new Date("2023-07-05"),
      author: "Street Photographer",
    },
    {
      id: 8,
      title: "Photography Composition 101: Rule of Thirds and Beyond",
      excerpt: "Master the basics of composition and take your photography to the next level.",
      thumbnail: "https://www.capturelandscapes.com/wp-content/uploads/2017/10/Greenland-Husky-Rule-of-Thirds.jpg",
      body: "Learn the fundamentals of photography composition, including the rule of thirds and advanced techniques. Elevate your photography skills.",
      category: "photography",
      publishDate: new Date("2023-08-20"),
      author: "Composition Guru",
    },
    {
      id: 9,
      title: "Exploring Natural Light: Tips for Outdoor Photography",
      excerpt: "Harness the power of natural light in your outdoor photography adventures.",
      thumbnail: "https://www.cantifix.co.uk/app/uploads/fly-images/921/natural-light-5-1920x860-c.jpeg",
      body: "Maximize the potential of natural light in your outdoor photography. Discover tips and techniques for stunning results.",
      category: "photography",
      publishDate: new Date("2023-09-12"),
      author: "Light Enthusiast",
    },
    {
      id: 19,
      title: "The Impact of Colors: Understanding Color Theory in Photography",
      excerpt: "Explore the significance of colors in photography and learn how to use color theory effectively.",
      thumbnail: "https://petapixel.com/assets/uploads/2018/06/colortheoryfeatt.jpg",
      body: "Dive into the world of color theory in photography and understand the impact of colors on visual storytelling. Learn how to use color effectively to enhance the mood and message of your photographs.",
      category: "photography",
      publishDate: new Date("2023-07-10"),
      author: "Color Theory Enthusiast",
    },
    {
      id: 20,
      title: "Photography as a Therapeutic Tool: Capturing Mental Wellness",
      excerpt: "Explore the therapeutic benefits of photography and its positive impact on mental wellness.",
      thumbnail: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2017/11/mental-wellness-03.jpg?resize=750%2C500&ssl=1",
      body: "Discover the healing power of photography and how it can positively impact mental wellness. Explore the therapeutic aspects of capturing moments through the lens.",
      category: "photography",
      publishDate: new Date("2023-08-28"),
      author: "Wellness Photographer",
    },
    {
      id: 21,
      title: "Portrait Photography: Capturing the Essence of Personality",
      excerpt: "Master the art of portrait photography and learn techniques for capturing the essence of personality.",
      thumbnail: "https://www.rangefinderonline.com/wp-content/uploads/2021/08/B23A9251-Edit.jpg",
      body: "Elevate your portrait photography skills and learn techniques for capturing the essence of personality in your subjects. Unlock the secrets of creating compelling and meaningful portraits.",
      category: "photography",
      publishDate: new Date("2023-09-15"),
      author: "Portrait Artist",
    },

    // Filmmaking
    {
      id: 10,
      title: "The Art of Cinematography: Crafting Visual Stories on Film",
      excerpt: "Delve into the world of cinematography and learn how to craft visually compelling stories.",
      thumbnail: "https://static.skillshare.com/uploads/video/thumbnails/12559ee7b27bdc9988dac45791a95070/original",
      body: "Discover the art of cinematography and learn how to craft visually compelling stories on film. Dive into the world of filmmaking.",
      category: "filmmaking",
      publishDate: new Date("2023-10-01"),
      author: "Cinematography Enthusiast",
    },
    {
      id: 11,
      title: "Editing Magic: Post-Production Tips for Filmmakers",
      excerpt: "Unleash the power of post-production with these editing tips for filmmakers.",
      thumbnail: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/45580/article_full%403x.jpg",
      body: "Learn post-production tips and tricks to enhance your filmmaking. Unleash the magic of editing in your film projects.",
      category: "filmmaking",
      publishDate: new Date("2023-11-08"),
      author: "Editing Wizard",
    },
    {
      id: 12,
      title: "Behind the Scenes: Everything, Everywhere, All At Once",
      excerpt: "Get an exclusive look behind the scenes of the making of a captivating film.",
      thumbnail: "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/3/3/asset/5f4960638cb4/sub-buzz-12635-1651549902-10.jpg",
      body: "Step behind the scenes and explore the making of the captivating film 'Everything, Everywhere, All At Once'. Gain insights into the filmmaking process.",
      category: "filmmaking",
      publishDate: new Date("2023-11-03"),
      author: "Film Insider",
    },
    {
      id: 22,
      title: "The Role of Sound: Enhancing Your Films with Quality Audio",
      excerpt: "Explore the importance of quality audio in filmmaking and how it enhances the overall viewing experience.",
      thumbnail: "https://files.soniccdn.com/files/2021/11/09/cymatic--audio-lp-16.jpeg",
      body: "Dive into the world of audio in filmmaking and understand its crucial role in enhancing the overall viewing experience. Explore tips and techniques for capturing high-quality audio for your films.",
      category: "filmmaking",
      publishDate: new Date("2023-10-05"),
      author: "Audio Enthusiast",
    },
    {
      id: 23,
      title: "DIY Filmmaking: Creating Films on a Budget",
      excerpt: "Discover budget-friendly filmmaking tips and tricks to create professional films without breaking the bank.",
      thumbnail: "https://jonreiss.com/site/wp-content/uploads/2015/06/Richmond_Christian.jpg",
      body: "Unleash your creativity with DIY filmmaking and learn budget-friendly tips and tricks to create professional films without breaking the bank. Explore innovative solutions for every aspect of the filmmaking process.",
      category: "filmmaking",
      publishDate: new Date("2023-11-18"),
      author: "Budget Filmmaker",
    },
    {
      id: 24,
      title: "Film Festivals 101: A Guide for Independent Filmmakers",
      excerpt: "Navigate the world of film festivals and learn how to submit and showcase your independent films.",
      thumbnail: "https://image2.commarts.com/images1/7/2/5/1/1/1152707_0_992_MTA5Mzg3ODYzMy0xMTMxMDUzNjYx.jpg",
      body: "Embark on the journey of independent filmmaking and explore the ins and outs of film festivals. Learn how to submit and showcase your films to a wider audience. Navigate the exciting world of film festivals with confidence.",
      category: "filmmaking",
      publishDate: new Date("2023-05-10"),
      author: "Independent Filmmaker",
    },
  ];

  constructor() {
    this.savePostsToLocalstorage();
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
