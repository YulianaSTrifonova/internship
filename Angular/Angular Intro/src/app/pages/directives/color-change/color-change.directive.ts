import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appColorChange]',
})
export class ColorChangeDirective implements OnInit {
    @Input({ required: true }) public color: string = '';
    @Input({ required: true }) public eventType: 'click' | 'hover' = 'click';
    @Input({ required: true }) public cssAttribute: string;

    private _initialCssAttributeValue: string;

    public constructor(private _el: ElementRef) {}

    public ngOnInit(): void {
        this._initialCssAttributeValue = this._el.nativeElement.style[this.cssAttribute] || '';
    }

    @HostListener('click') public onClick(): void {
        if (this.eventType === 'click') {
            this.setAttribute(this.color);
        }
    }

    @HostListener('mouseenter') public onMouseEnter(): void {
        if (this.eventType === 'hover') {
            this.setAttribute(this.color);
        }
    }

    @HostListener('mouseleave') public onMouseLeave(): void {
        if (this.eventType === 'hover') {
            this.setAttribute(this._initialCssAttributeValue);
        }
    }

    private setAttribute(color: string | undefined): void {
        this._el.nativeElement.style[this.cssAttribute] = color;
    }
}
