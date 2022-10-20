import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DbzModule } from './dbz/dbz.module';
import { DbzNgFormModule } from './dbz-ng-form/dbz-ng-form.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  // imports: [BrowserModule, DbzModule],
  imports: [BrowserModule, DbzNgFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
