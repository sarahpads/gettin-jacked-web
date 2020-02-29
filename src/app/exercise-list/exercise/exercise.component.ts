import { Component, OnInit, Input } from '@angular/core';
import { MdcIconButtonChange, MdcSnackbar } from '@angular-mdc/web';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  @Input() public exercise;

  constructor(
    private router: Router,
    private snackbar: MdcSnackbar
  ) { }

  ngOnInit(): void {
  }

  public onFavouriteClick(event: MdcIconButtonChange) {
    // for some reason event.value is the opposite
    const snackbarRef = this.snackbar.open(`
      ${!event.value
        ? 'Added to'
        : 'Removed from'
      } favourites
    `);

    snackbarRef.afterDismiss().subscribe(reason => {
      console.log(reason);
    });
  }

  public onDoneClick() {
    this.router.navigate(['exercises']);
  }
}
