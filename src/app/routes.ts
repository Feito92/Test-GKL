import { Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { ListComponent } from "./components/list/list.component";
import { FilterComponent } from "./components/filter/filter.component";
import { NgModule } from "@angular/core";
import { FruitDetailsComponent } from "./components/fruit-details/fruit-details.component";


const routeConfig: Routes = [
    { 
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    },
    {
      path: 'main',
      component: MainComponent,
      title: 'Main page',
    },
    {
      path: 'details/:id',
      component: FruitDetailsComponent,
      title: 'Fruits details',
    },
    { path: '**', redirectTo: 'main' }
  ];
  export default routeConfig;