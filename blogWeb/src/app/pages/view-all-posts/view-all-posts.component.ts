import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-all-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-all-posts.component.html',
  styleUrl: './view-all-posts.component.scss'
})
export class ViewAllPostsComponent {

  allPosts:any;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getAllPosts();

   
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(data => {
      console.log(data);
      this.allPosts = data;
    }, error => {
      console.log(error);
    })
  }
}
