import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { elements } from '../../const/constantes';
import { ElementInterface } from '../../interfaces/element-interface';

@Component({
  selector: 'app-fruit-details',
  imports: [RouterModule],
  templateUrl: './fruit-details.component.html',
  styleUrl: './fruit-details.component.css'
})
export class FruitDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  fruitId =  -1;
  elementList = elements;
  name:string | undefined = "";
  description:string | undefined = "";
  selectedElement: ElementInterface | undefined; 

  
  constructor(){
    this.fruitId = Number(this.route.snapshot.params['id']);
    this.selectedElement = this.elementList.find(element => element.id === this.fruitId);
    this.name = this.selectedElement?.name;
    this.description = this.selectedElement?.description;
    //console.log(this.selectedElement);
  }

}
