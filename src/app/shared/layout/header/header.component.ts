import { Component, OnInit, Input } from '@angular/core';

import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public title: string;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit(): void {
  }

  public onMenuClick() {
    this.layoutService.toggleMenu();
  }

}
