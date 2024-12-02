import { ApplicationConfig ,importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
} from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './modules/app.state';
import { environment } from '../environments/environment';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),   provideHttpClient(),importProvidersFrom(NgxsModule.forRoot([AppState], {developmentMode: !environment.production})),
  importProvidersFrom(NgxsReduxDevtoolsPluginModule.forRoot({
    disabled: environment.production
  })),
  importProvidersFrom(NgxsLoggerPluginModule.forRoot({
    disabled: environment.production
  }))]
};
