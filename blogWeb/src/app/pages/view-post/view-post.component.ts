import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {

  postId = this.activateRoute.snapshot.params['id'];
  postData : any;

  constructor(private postService: PostService, 
    private activateRoute: ActivatedRoute) {}

    ngOnInit() {
      console.log(this.postId);
      this.getPostId();
    }

    getPostId() {
      this.postService.getPostsById(this.postId).subscribe(res => {
        this.postData = res;
        console.log(res);
      }, error => {
        console.log(error);
      })
    }

    likePost() {
      this.postService.likePOst(this.postId).subscribe(res => {
        console.log("like post successfully");
        this.getPostId();
      }, error => {
        console.log(error);
      })
    }
}
