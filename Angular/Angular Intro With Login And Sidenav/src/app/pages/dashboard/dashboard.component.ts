import { Component, OnDestroy } from '@angular/core';
import { SidenavService } from '@intro/app/services/sidenav.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'intro-app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnDestroy {
    public isNavOpen = false;
    public _sidenavSubscription: Subscription;

    public constructor(public _sidenavService: SidenavService) {}

    public ngOnDestroy(): void {
        this._sidenavSubscription.unsubscribe();
    }
}
