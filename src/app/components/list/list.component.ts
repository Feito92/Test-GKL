import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementInterface } from '../../interfaces/element-interface';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-list',
  imports: [NgFor,NgIf,RouterModule,ScrollingModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() elements!: ElementInterface[];
  @Output() elementSelected = new EventEmitter<ElementInterface>();

  selectElement(element: ElementInterface) {
    this.elementSelected.emit(element);
  }
}
