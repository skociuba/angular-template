import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from './../../../../modules/app.state';
import { Post } from './../../../../modules/interfaces';
import { Store } from '@ngxs/store';
import * as AppStateActions from './../../../../modules/app-state.actions';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new AppStateActions.GetPosts());
  }

  @Select(AppState.posts)
  private readonly postsSource$!: Observable<Post[]>;

  readonly posts$ = combineLatest([this.postsSource$]).pipe(
    map(([post]) => post)
  );

  goToEditPost(postId: string): void {
    this.router.navigate([`/posts/${postId}`]);
  }
  addNewPost(): void {
    this.router.navigate(['/posts/add-post']);
  }
}