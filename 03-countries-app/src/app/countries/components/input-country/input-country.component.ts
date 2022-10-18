import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styles: [],
})
export class InputCountryComponent implements OnInit {
  @Input() placeholder: string = 'Buscar País...';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  term: string = '';
  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  search() {
    this.onEnter.emit(this.term);
  }

  onKeyDown() {
    this.debouncer.next(this.term);
  }
}
