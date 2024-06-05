import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'intro-custom-input',
    templateUrl: './custom-input.component.html',
})
export class CustomInputComponent {
    @Input() public inputValue: string | undefined;
    @Output() public valueChange = new EventEmitter<number>();

    public onValueChange(value: string): void {
        return this.valueChange.emit(Number(value));
    }
}
