import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
