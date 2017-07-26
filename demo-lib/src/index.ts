import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { UnusedComponent } from "./unused.component";

export {UnusedClass} from './unused';
export {OtherUnusedClass, UsedClass} from './partly-used';
export {SampleComponent} from './sample.component';
export {UnusedComponent} from './unused.component';

import {UnusedClass} from './unused';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    UnusedComponent
  ],
  exports: [
    SampleComponent,
    UnusedComponent
  ]
})
export class SampleModule {
  static unused: any;
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
