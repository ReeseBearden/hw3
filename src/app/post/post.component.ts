import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  myProperty: string = "";
  posts: string[] = [];
  postCount: number = 0;

  onSubmit() {
    if (this.myProperty) {
      this.posts.push(this.myProperty);
      this.myProperty = "";
      this.postCount = this.posts.length;
    }
  }
}
