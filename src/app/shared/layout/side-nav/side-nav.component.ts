import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public isOpen: Observable<boolean>;
  public items = [
    {
      label: 'Dashboard',
      icon: 'home',
      link: '/'
    },
    {
      label: 'Workouts',
      icon: 'fitness_center',
      link: '/workouts'
    },
    {
      label: 'Goals',
      icon: 'star',
      link: '/goals'
    },
    {
      label: 'Exercises',
      icon: 'style',
      link: '/exercises'
    }
  ]

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit(): void {
    this.isOpen = this.layoutService.isMenuOpen;
  }

  public onOpenChange(isMenuOpen) {
    this.layoutService.setMenu(isMenuOpen);
  }

}
