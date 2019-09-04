import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TwoWayDataBindingComponent } from './two-way-data-binding.component';


@NgModule({
  declarations: [TwoWayDataBindingComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[TwoWayDataBindingComponent]
})
export class TwoWayDataBindingModule { }
