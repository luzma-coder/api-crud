import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  post: Post = null;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };
  
  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.post = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.post === 'undefined') {
      this.router.navigate(['list']);
    }
  }
  
  onEdit():void {
    this.navigationExtras.state.value = this.post;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onDelete(): void{
    alert('delete');
  }

  onBackToList(): void{
    this.router.navigate(['list']);
  }
}
