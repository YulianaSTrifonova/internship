import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'intro-user-events',
    templateUrl: './user-events.component.html',
    styleUrls: ['./user-events.component.scss'],
})
export class UserEventsComponent {
    public lastPressedKey: string;

    public constructor(private _translateService: TranslateService) {
        this._translateService.stream('userEvents.pressAnyKey').subscribe((translation: string) => {
            this.lastPressedKey = translation;
        });
    }

    public handleClick(): void {
        this._translateService.get('userEvents.clickedMessage').subscribe((translation: string) => {
            return alert(translation);
        });
    }

    @HostListener('document:keydown', ['$event'])
    public handleKeydown(event: KeyboardEvent): string {
        return (this.lastPressedKey = event.code);
    }
}
