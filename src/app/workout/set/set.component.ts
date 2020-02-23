import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  @Input() public set;

  constructor() { }

  ngOnInit(): void {
  }

  public onMenuSelect() {}

}
