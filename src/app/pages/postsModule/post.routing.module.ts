import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PostsComponent } from './views/posts/posts.component';
import { EditPostComponent } from './views/edit-post/edit-post.component';
import { AddPostComponent } from './views/add-post/add-post.component';

const routes: Route[] = [
    {
        path: '',
        component: PostsComponent,
        pathMatch: 'full',
    },
    {
        path: 'add-post',
        component: AddPostComponent,
        pathMatch: 'full',
    },
    {
        path: ':postId',
        component: EditPostComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class PostsRoutingModule {
}
