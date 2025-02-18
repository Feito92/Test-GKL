import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() filterValue = new EventEmitter<string>();
  @Input() nameSelected!: string;
  ngOnInit() {
    console.log('Valor de nameSelected en ngOnInit:', this.nameSelected);
  }

  saveValue(text: string) {
    this.filterValue.emit(text);
    console.log(this.nameSelected)
  }
}
