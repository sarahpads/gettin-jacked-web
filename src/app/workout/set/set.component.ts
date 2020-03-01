import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  public set = { index: 0, reps: 10, weight: 9, status: 'complete' };
  public modifier = 'none';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onDoneClick() {
    this.router.navigate(['workout']);
  }


}
