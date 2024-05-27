import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appTooltip]',
})
export class TooltipDirective {
    @Input('appTooltip') public tooltipTitle: string = '';
    public tooltip: HTMLElement;

    public constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {}

    @HostListener('mouseenter') public onMouseEnter(): void {
        this.showTooltip();
    }

    @HostListener('mouseleave') public onMouseLeave(): void {
        this.hideTooltip();
    }

    private showTooltip(): void {
        this.tooltip = this.renderer.createElement('span');
        this.renderer.appendChild(this.tooltip, this.renderer.createText(this.tooltipTitle));
        this.renderer.appendChild(this.el.nativeElement, this.tooltip);
        this.renderer.addClass(this.tooltip, 'tooltip');
    }

    private hideTooltip(): void {
        this.renderer.removeChild(this.el.nativeElement, this.tooltip);
    }
}
