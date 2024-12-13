import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from '../app/api/src/Api';

import { LayoutComponent} from './shared/layout/layout.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  providers:[Api],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
