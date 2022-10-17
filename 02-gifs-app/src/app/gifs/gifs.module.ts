import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page/main-page.component';
import { ResultsComponent } from './results/results.component';
import { SearcherComponent } from './searcher/searcher.component';

@NgModule({
  declarations: [MainPageComponent, SearcherComponent, ResultsComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class GifsModule {}
