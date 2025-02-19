import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
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
  // saveValue(text: string) {
  //   this.filterValue.emit(text);
  //   console.log(this.nameSelected)
  // }
  saveValue(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.term = inputElement.value;
      this.filterValue.emit(this.term);
  
      this.router.navigate([], {
        queryParams: { term: this.term },
        queryParamsHandling: 'merge',
      });
    }
  }
}
