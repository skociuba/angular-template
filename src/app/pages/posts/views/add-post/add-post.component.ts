import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { Store } from '@ngxs/store';
import { AppState } from './../../../../modules/app.state';
import { Post } from './../../../../modules/interfaces';
import * as AppStateActions from './../../../../modules/app-state.actions';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule, ButtonModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent implements OnInit {
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

    this.post$.subscribe((post) => {
      if (post) {
        this.title = post.title;
        this.body = post.body;
      }
    });
  }

  AddPost(): void {
    const payload = {
      title: this.title,
      body: this.body
    };
    this.store.dispatch(new AppStateActions.AddPost( payload));
  }
}