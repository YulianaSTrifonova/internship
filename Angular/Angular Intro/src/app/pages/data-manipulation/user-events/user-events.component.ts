import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'intro-user-events',
    templateUrl: './user-events.component.html',
    styleUrls: ['./user-events.component.scss'],
})
export class UserEventsComponent {
    public lastPressedKey: string = 'Implement This';
    public isRedSquareHovered: boolean = false;

    public handleClick(): void {
        return alert('You clicked something!');
    }

    @HostListener('document:keydown', ['$event'])
    public handleKeydown(event: KeyboardEvent): string {
        return (this.lastPressedKey = event.code);
    }

    public handleHover(): boolean {
        return this.isRedSquareHovered ? (this.isRedSquareHovered = false) : (this.isRedSquareHovered = true);
    }
}
