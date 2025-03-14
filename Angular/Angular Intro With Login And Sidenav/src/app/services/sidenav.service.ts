import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidenavService {
    private _sidenavState = new BehaviorSubject<boolean>(false);
    public sidenavState = this._sidenavState.asObservable();

    public toggleSidebar(collapsed: boolean): void {
        this._sidenavState.next(collapsed);
    }
}
