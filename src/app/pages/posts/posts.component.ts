import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from './../../modules/app.state';
import { Posts } from './../../modules/interfaces';
import { Store } from '@ngxs/store';
import * as AppStateActions from './../../modules/app-state.actions';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new AppStateActions.GetPosts());

    this.posts$.subscribe((posts) => {
      console.log(posts);
    });
  }
  @Select(AppState.posts)
  private readonly postsSource$!: Observable<Posts[]>;

  readonly posts$ = combineLatest([this.postsSource$]).pipe(
    map(([post]) => post)
  );
}
