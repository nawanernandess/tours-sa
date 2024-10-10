import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, FeaturesModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
