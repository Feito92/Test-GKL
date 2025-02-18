import { Component, NgModule } from '@angular/core';
import { elements } from '../../const/constantes';
import { ListComponent } from "../list/list.component";
import { CommonModule } from '@angular/common';
import { FilterComponent } from "../filter/filter.component";
import { ElementInterface } from '../../interfaces/element-interface';

@Component({
  selector: 'app-main',
  imports: [ListComponent, FilterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  elements = elements;
  filteredElementsList: ElementInterface[] = this.elements;
  nameSelected: string = "";

  handleElementFiltred(filtred: string) {
    if(!filtred)
      {
        this.filteredElementsList = this.elements;
        return;
      }
      this.filteredElementsList = this.elements.filter((elements) => 
        elements?.name.toLocaleLowerCase().includes(filtred.toLocaleLowerCase()),
      );
  }

  handleElementSelected(element: ElementInterface) {
    this.nameSelected = element.name;
  }
}

