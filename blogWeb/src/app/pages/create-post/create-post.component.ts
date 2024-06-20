import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  postForm!: FormGroup;

  tags: string[] = [];

  constructor(private fb: FormBuilder, private router : Router, 
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      name: [null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      image: [null, Validators.required],
      postBy: [null, Validators.required],
      tags: [null, Validators.required],
    })
  }

  add(event:any) {
    const value = (event.value || '').trim();

    if(value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  remove(tag:any) {
    const index = this.tags.indexOf(tag);

    if(index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  createPost() {
    const data = this.postForm.value;
    data.tags = this.tags;

    this.postService.createNewPost(data).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/");
    }, error => {
      console.log(error);
    })
  }
}
