import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createNewPost(data:any):Observable<any>{
    return this.http.post(url + 'api/posts', data);
  }

  getAllPosts():Observable<any>{
    return this.http.get(url + 'api/posts');
  }

  getPostsById(postId : number):Observable<any>{
    return this.http.get(`${url}api/posts/${postId}`);
  }

  likePOst(postId : number):Observable<any>{
    return this.http.put(`${url}api/posts/${postId}/like`, {});
  }
}
