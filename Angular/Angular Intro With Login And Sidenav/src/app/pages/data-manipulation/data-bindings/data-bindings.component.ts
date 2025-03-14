import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MathUtilService } from '@intro/app/services/math-util.service';
import { LifecycleHooks, Operators, Strings } from './enums';

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
        console.log(LifecycleHooks.ONINIT);
        this.firstNumber = this.firstNumber;
        this.secondNumber = this.secondNumber;
    }

    public ngAfterViewInit(): void {
        console.log(LifecycleHooks.AFTERVIEWINIT);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log(LifecycleHooks.ONCHANGES, changes);
        if (changes[Strings.FIRST_NUMBER]) {
            console.log(
                `First number changed from ${changes[Strings.FIRST_NUMBER].previousValue} to ${changes[Strings.FIRST_NUMBER].currentValue}`,
            );
        }

        if (changes[Strings.SECOND_NUMBER]) {
            console.log(
                `Second number changed from ${changes[Strings.SECOND_NUMBER].previousValue} to ${changes[Strings.SECOND_NUMBER].currentValue}`,
            );
        }

        if (changes[Strings.OPERATOR]) {
            console.log(
                `Operator changed from ${changes[Strings.OPERATOR].previousValue} to ${changes[Strings.OPERATOR].currentValue}`,
            );
        }
    }

    public ngOnDestroy(): void {
        console.log(LifecycleHooks.ONDESTROY);
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
