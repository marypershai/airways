import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { NativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../material/material.module';
import { DestinationSelectComponent } from './components/destination-select/destination-select.component';
import { CityOptionComponent } from './components/city-option/city-option.component';
import { DestinationInfoComponent } from './components/destination-info/destination-info.component';
import { PassengersPickerComponent } from './components/passengers-picker/passengers-picker.component';
import { CounterComponent } from './components/counter/counter.component';
import { BodyClickDirective } from './directives/body-click.directive';

@NgModule({
  declarations: [
    DestinationSelectComponent,
    CityOptionComponent,
    DestinationInfoComponent,
    PassengersPickerComponent,
    CounterComponent,
    BodyClickDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    NativeDateModule,
  ],
  exports: [DestinationSelectComponent, DestinationInfoComponent],
})
export class SharedModule {}
