import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostFormComponent } from './post-form.component';

@NgModule({
  declarations: [PostFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PostFormComponent]
})
export class PostFormModule { }
