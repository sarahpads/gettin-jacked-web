import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public items = [
    {
      title: 'Dashboard',
      icon: 'home',
      link: '/'
    },
    {
      title: 'Workouts',
      icon: 'fitness_center',
      link: '/workouts'
    },
    {
      title: 'Goals',
      icon: 'star',
      link: '/goals'
    },
    {
      title: 'Exercises',
      icon: 'style',
      link: '/exercises'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
