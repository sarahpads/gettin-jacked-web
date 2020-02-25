import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _isMenuOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly isMenuOpen: Observable<boolean> = this._isMenuOpen.asObservable();

  constructor() { }

  openMenu() {
    this._isMenuOpen.next(true);
  }

  closeMenu() {
    this._isMenuOpen.next(false);
  }

  setMenu(isMenuOpen) {
    this._isMenuOpen.next(isMenuOpen);
  }

  toggleMenu() {
    this._isMenuOpen.next(!this._isMenuOpen.getValue());
  }
}
