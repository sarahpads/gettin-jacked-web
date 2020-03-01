import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-flag',
  templateUrl: './set-flag.component.html',
  styleUrls: ['./set-flag.component.scss']
})
export class SetFlagComponent implements OnInit {
  @Input() public set;
  public message = 'assisted';

  constructor() { }

  ngOnInit(): void {
  }

}
