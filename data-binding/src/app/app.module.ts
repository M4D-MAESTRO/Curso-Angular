import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { TwoWayDataBindingModule } from './two-way-data-binding/two-way-data-binding.module';
import { InputOutputPropertiesComponent } from './input-output-properties/input-output-properties.component';
import { InputPropertyComponent } from './input-property/input-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    InputOutputPropertiesComponent,
    InputPropertyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    TwoWayDataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
