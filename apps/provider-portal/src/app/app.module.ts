import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UtilitiesModule } from '@monorepo-demo/utilities';
import { UiModule } from '@monorepo-demo/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UtilitiesModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
