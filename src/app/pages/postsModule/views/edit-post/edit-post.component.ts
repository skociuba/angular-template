import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AppState } from './../../../../modules/app.state';
import { Post } from './../../../../modules/interfaces';
import * as AppStateActions from './../../../../modules/app-state.actions';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule, ButtonModule],
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  title: string = '';
  body: string = '';

  @Select(AppState.post) // Pobiera post z AppState
  private readonly postSource$!: Observable<Post>;

  readonly post$ = this.postSource$; // Strumień posta

  ngOnInit(): void {
    // Pobranie ID posta z URL-a
    const postId = this.route.snapshot.paramMap.get('postId');
    if (postId) {
      this.store.dispatch(new AppStateActions.GetPost(String(postId)));
    }

    // Subskrypcja strumienia i przypisanie tytułu i treści do zmiennych `title` i `body`
    this.post$.subscribe((post) => {
      if (post) {
        this.title = post.title;
        this.body = post.body;
      }
    });
  }

  EditPost(postId: string): void {
    const payload = {
      id: postId,
      title: this.title,
      body: this.body
    };
    this.store.dispatch(new AppStateActions.EditPost(postId, payload));
  }
}