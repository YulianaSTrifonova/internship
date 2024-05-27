import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MathUtilService {
    public sumOfTwo(a: number, b: number): number {
        return a + b;
    }

    public subOfTwo(a: number, b: number): number {
        return a - b;
    }

    public multOfTwo(a: number, b: number): number {
        return a * b;
    }

    public divOfTwo(a: number, b: number): number {
        return a / b;
    }
}
