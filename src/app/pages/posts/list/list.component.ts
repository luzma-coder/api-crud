import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { Post } from 'src/app/shared/models/post.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts: Post[] = [];
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
  
  constructor(private router: Router, private postservice: PostsService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  onEdit(item: any):void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  
  onSee(item: any):void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'],this.navigationExtras);
  }
  
  onDelete(item: any):void {
    alert('Deleted');
  }

  private getDataFromService():void{
    this.postservice.getPosts(3)
    .pipe(take(1))
    .subscribe((data) => {
      if (data?.length){
        console.log(data);
        this.posts = data;  
      } else {
        this.posts = [];
      }
    });
  }
}
