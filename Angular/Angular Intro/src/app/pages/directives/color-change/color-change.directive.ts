import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appColorChange]',
})
export class ColorChangeDirective {
    @Input({ required: true }) public color: string = '';
    @Input({ required: true }) public eventType: 'click' | 'hover' = 'click';
    @Input({ required: true }) public cssAttribute: string;

    private initialCssAttributeValue: string;

    public constructor(private _el: ElementRef) {
        this.initialCssAttributeValue = _el.nativeElement.style.getPropertyValue(this.cssAttribute);
    }

    @HostListener('click') public onClick(): void {
        if (this.eventType === 'click') {
            this.setAttribute(this.color);
        }
    }
    //another square with inline-style color red

    @HostListener('mouseenter') public onMouseEnter(): void {
        if (this.eventType === 'hover') {
            this.setAttribute(this.color);
        }
    }

    @HostListener('mouseleave') public onMouseLeave(): void {
        if (this.eventType === 'hover') {
            this.setAttribute(this.initialCssAttributeValue);
        }
    }

    private setAttribute(color: string | undefined): void {
        this._el.nativeElement.style[this.cssAttribute] = color;
    }
}
