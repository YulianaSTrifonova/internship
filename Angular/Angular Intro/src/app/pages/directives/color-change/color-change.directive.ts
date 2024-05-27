import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appColorChange]',
})
export class ColorChangeDirective implements OnInit {
    @Input('appColorChange') public textColor: string = '';
    @Input() public hoverClass: string = 'green';
    @Input() public defaultClass: string = 'red';
    @Input() public eventType: 'click' | 'hover' = 'click';

    public constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {}

    public ngOnInit(): void {
        if (this.eventType === 'hover') {
            this.setDefaultClass();
        }
    }

    @HostListener('click') public onClick(): void {
        if (this.eventType === 'click') {
            this.changeTextColor(this.textColor);
        }
    }

    @HostListener('mouseenter') public onMouseEnter(): void {
        if (this.eventType === 'hover') {
            this.changeClass(this.defaultClass, false);
            this.changeClass(this.hoverClass, true);
        }
    }

    @HostListener('mouseleave') public onMouseLeave(): void {
        if (this.eventType === 'hover') {
            this.changeClass(this.hoverClass, false);
            this.changeClass(this.defaultClass, true);
        }
    }

    private changeTextColor(color: string): void {
        this.renderer.setStyle(this.el.nativeElement, 'color', color);
    }

    private setDefaultClass(): void {
        this.changeClass(this.defaultClass, true);
    }

    private changeClass(className: string, add: boolean): void {
        if (add) {
            this.renderer.addClass(this.el.nativeElement, className);
        } else {
            this.renderer.removeClass(this.el.nativeElement, className);
        }
    }
}
