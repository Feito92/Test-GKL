import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() filterValue = new EventEmitter<string>();
  @Input() nameSelected!: string;
  term: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.term = params.get('term') || '';  
      this.filterValue.emit(this.term);  
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['nameSelected'] && changes['nameSelected'].currentValue !== undefined) {
      this.term = changes['nameSelected'].currentValue;
    }
  }
  // saveValue(text: string) {
  //   this.filterValue.emit(text);
  //   console.log(this.nameSelected)
  // }
  saveValue(value: string) {
    this.term = value;
    this.filterValue.emit(this.term);
  
    this.router.navigate([], {
      queryParams: { term: this.term },
      queryParamsHandling: 'merge',
    });
  }
}
