import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;



  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: [''] },
      { label: 'Posts', routerLink: ['posts'] },
      { label: 'news', routerLink: ['news'] },
    ];

  }
}
