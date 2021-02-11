import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from 'src/app/shared/models/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl = environment.apiURL+'posts/';
  // users: Observable<User[]>;

  constructor(private http: HttpClient) {
  }
  // onDeleteUser(postId: string): Promise<void> {

  // }

  onSaveUser(post: Post, postId: string) {
    const url = `${this.apiUrl}${postId}`;
    return this.http.put<Post>(url, post);
  }

  getPosts(page:number) {
    const url = `${this.apiUrl}?_page=${page}`;
    console.log(url);
    return this.http.get<Post[]>(url);
  }
  
}
