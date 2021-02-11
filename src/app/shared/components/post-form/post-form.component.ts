import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostsService } from 'src/app/pages/posts/posts.service';
import { Post } from 'src/app/shared/models/post.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postvalue: Post;
  postForm: FormGroup;
  
  constructor(private router: Router, private fb:FormBuilder, private postservice: PostsService) {
    const navigation = this.router.getCurrentNavigation();
    this.postvalue = navigation?.extras?.state?.value;
    this.initForm();
   } 

  ngOnInit(): void {
    console.log('entro al oninit  ',this.postvalue);
    if (typeof this.postvalue === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.postForm.patchValue(this.postvalue);
    }
  }
  
  onSave():void {
    if (this.postForm.valid) {
      const post = this.postForm.value;
      const postId = this.postvalue?.id || 'new'; 
      alert(`user saved:  ${ postId}`);
      this.postForm.reset();
    } 
  }

  onBackToList():void{
    this.router.navigate(['list'])
  }

  isValidField(field: string): string{
    const ValidatedField = this.postForm.get(field);
    return (!ValidatedField.valid && ValidatedField.touched) 
            ? 'is-invalid' : ValidatedField.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.postForm = this.fb.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      body: ['',[Validators.required]],
      userId: ['',[Validators.required]]
    })
  }  

}
