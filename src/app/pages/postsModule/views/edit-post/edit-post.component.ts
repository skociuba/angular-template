import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AppState } from './../../../../modules/app.state';
import { Post } from './../../../../modules/interfaces';
import * as AppStateActions from './../../../../modules/app-state.actions';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('postId');
    if (postId) {
      this.store.dispatch(new AppStateActions.GetPost(postId));
    }
  }

  @Select(AppState.post)
  private readonly postSource$!: Observable<Post>;

  readonly post$ = this.postSource$;
}