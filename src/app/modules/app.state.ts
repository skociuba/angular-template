/* eslint-disable class-methods-use-this */
import * as AppStateActions from './app-state.actions';
import * as interfaces from './interfaces';

import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { Injectable, NgZone } from '@angular/core';

import { Api } from '../api/src/Api';
import { Router } from '@angular/router';

export interface AppStateModel {
    posts: interfaces.Post[];
    post : interfaces.Post;
}

export const APP_STATE_TOKEN = new StateToken<AppStateModel>(`app`);

@State<AppStateModel>({
    name: APP_STATE_TOKEN,
    defaults: {
      
        posts:[],
        post: { id: '', userId: '', title: '', body: '' },

    },
})
@Injectable()
export class AppState {
    constructor(private readonly apiService: Api,
                private readonly router: Router,
                private readonly ngZone: NgZone) {
    }

    @Selector()
    static posts(state: AppStateModel) {
        return state.posts;
    }
    @Selector()
    static post(state: AppStateModel) {
        return state.post;
    }



    @Action(AppStateActions.GetPosts)
    async getPosts(ctx: StateContext<AppStateModel>) {
        const res = await this.apiService.posts.postsControllerAllPosts();
        const posts = res.data as any;
        ctx.patchState({
           posts,
        });
    }

    @Action(AppStateActions.GetPost)
    async getPost(ctx: StateContext<AppStateModel>, action: AppStateActions.GetPost) {
      const res = await this.apiService.posts.postsControllerGetPost(action.postId);
      const post = res.data as any;
      ctx.patchState({
        post,
      });
    }
    @Action(AppStateActions.EditPost)
    async editPost(ctx: StateContext<AppStateModel>, action: AppStateActions.EditPost) {
      const res = await this.apiService.posts.postsControllerEditPost(action.postId, action.payload);
      const updatedPost = res.data as any;
  
      ctx.patchState({
        post: updatedPost,
      });
    }

}
