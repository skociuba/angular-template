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
import { Api } from './../../../../api/src/Api';
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
    private route: ActivatedRoute,
    private readonly apiService: Api
  ) {}

  title: string = '';

  @Select(AppState.post) // Pobiera post z AppState
  private readonly postSource$!: Observable<Post>;

  readonly post$ = this.postSource$; // Strumień posta

  ngOnInit(): void {
    // Pobranie ID posta z URL-a
    const postId = this.route.snapshot.paramMap.get('postId');
    if (postId) {
      this.store.dispatch(new AppStateActions.GetPost(String(postId)));
    }

    // Subskrypcja strumienia i przypisanie tytułu do zmiennej `title`
    this.post$.subscribe((post) => {
      if (post) {
        this.title = post.title;
      }
    });
  }

  async EditPost(postId: string): Promise<void> {
    try {
      await this.apiService.posts.postsControllerEditPost(postId, {
        title: this.title,
      });
    } catch (error) {
      // Obsługa błędów
      console.error('Error editing post:', error);
    }
  }
}
