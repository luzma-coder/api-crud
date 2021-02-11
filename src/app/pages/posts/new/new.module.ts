import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { PostFormComponent } from 'src/app/shared/components/post-form/post-form.component';
import { PostFormModule } from 'src/app/shared/components/post-form/post-form.module';


@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    NewRoutingModule,
    PostFormModule
  ]
})
export class NewModule { }
