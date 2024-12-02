/* eslint-disable class-methods-use-this */
import * as AppStateActions from './app-state.actions';
import * as interfaces from './interfaces';

import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { Injectable, NgZone } from '@angular/core';

import { Api } from '../api/src/Api';
import { Router } from '@angular/router';

export interface AppStateModel {
    userData: interfaces.UserData | false | undefined;

    // * data-state
    transportAuthorities: interfaces.TransportAuthority[];
    policies?: interfaces.Policy[];
    faqs?: interfaces.Faq[];
    tickets: interfaces.Ticket[];
    products: interfaces.Product[];
    selectedTransportAuthority: any;
    suppliers: interfaces.Supplier[];
    stations: interfaces.Station[];
    pickupPoints: interfaces.Station[];
    posts: any[];

    // * ui-state
    showHeaderTransportAuthoritiesDropdown: boolean;
    showChooseTransportAuthorityDialog: boolean;
    cartHidden: boolean;
}

export const APP_STATE_TOKEN = new StateToken<AppStateModel>(`app`);

@State<AppStateModel>({
    name: APP_STATE_TOKEN,
    defaults: {
        userData: undefined,

        // * data-state
        transportAuthorities: [],
        policies: undefined,
        faqs: undefined,
        tickets: [],
        selectedTransportAuthority: undefined,
        products: [],
        suppliers: [],
        stations: [],
        pickupPoints: [],
        posts:[],

        // * ui-state
        showHeaderTransportAuthoritiesDropdown: true,
        showChooseTransportAuthorityDialog: false,
        cartHidden: true,
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


    @Action(AppStateActions.GetPosts)
    async getPosts(ctx: StateContext<AppStateModel>) {
        const res = await this.apiService.posts.postsControllerAllPosts();
        const posts = res.data as any;
        ctx.patchState({
           posts,
        });
    }



}
