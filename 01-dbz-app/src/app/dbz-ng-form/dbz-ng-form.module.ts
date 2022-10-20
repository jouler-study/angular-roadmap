import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DbzModule } from './../dbz/dbz.module';
import { AddCharacterComponent } from './add-character/add-character.component';
import { MainPageComponent } from './main-page/main-page.component';

import { DbzService } from './../services/dbz.service';

@NgModule({
  declarations: [AddCharacterComponent, MainPageComponent],
  imports: [CommonModule, DbzModule, FormsModule],
  exports: [MainPageComponent],
  providers: [DbzService],
})
export class DbzNgFormModule {}
