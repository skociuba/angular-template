import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './post.routing.module';
import { PostsComponent } from './views/posts/posts.component';
import { EditPostComponent } from './views/edit-post/edit-post.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsRoutingModule,
    PostsComponent,
    EditPostComponent
  ]
})
export class PostsModule { }
