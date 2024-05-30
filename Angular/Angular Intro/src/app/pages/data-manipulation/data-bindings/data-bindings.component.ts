import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MathUtilService } from '@intro/app/services/math-util.service';
import { Operators } from './enums';

@Component({
    selector: 'intro-data-binding',
    templateUrl: './data-bindings.component.html',
})
export class DataBindingComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    @Input() public firstNumber: number;
    @Input() public secondNumber: number;
    @Input() public operator: Operators;

    public constructor(private _mathUtilService: MathUtilService) {}

    public ngOnInit(): void {
        console.log('OnInit');
        this.firstNumber = this.firstNumber;
        this.secondNumber = this.secondNumber;
    }

    public ngAfterViewInit(): void {
        console.log('AfterViewInit');
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('OnChanges', changes);
        if (changes['firstNumber']) {
            console.log(
                `First number changed from ${changes['firstNumber'].previousValue} to ${changes['firstNumber'].currentValue}`,
            );
        }

        if (changes['secondNumber']) {
            console.log(
                `Second number changed from ${changes['secondNumber'].previousValue} to ${changes['secondNumber'].currentValue}`,
            );
        }

        if (changes['operator']) {
            console.log(
                `Operator changed from ${changes['operator'].previousValue} to ${changes['operator'].currentValue}`,
            );
        }
    }

    public ngOnDestroy(): void {
        console.log('OnDestroy');
    }

    public getResult(): number {
        let result = 0;
        switch (this.operator) {
            case Operators.ADDITION:
                result = this._mathUtilService.sumOfTwo(this.firstNumber, this.secondNumber);
                break;

            case Operators.SUBTRACTION:
                result = this._mathUtilService.subOfTwo(this.firstNumber, this.secondNumber);
                break;

            case Operators.MULTIPLICATION:
                result = this._mathUtilService.multOfTwo(this.firstNumber, this.secondNumber);
                break;

            case Operators.DIVISION:
                result = this._mathUtilService.divOfTwo(this.firstNumber, this.secondNumber);
                break;

            default:
                result = 0;
                break;
        }
        return result;
    }
}
