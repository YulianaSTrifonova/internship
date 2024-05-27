import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsComponent } from './animals.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';

@NgModule({
    declarations: [AnimalsComponent, CatComponent, DogComponent],
    imports: [CommonModule],
})
export class AnimalsModule {}
