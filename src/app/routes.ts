import { Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { ListComponent } from "./components/list/list.component";
import { FilterComponent } from "./components/filter/filter.component";
import { NgModule } from "@angular/core";


const routeConfig: Routes = [
    {
      path: '',
      component: MainComponent,
      title: 'Main page',
    },
    {
      path: 'fruit/:id',
      component: ListComponent,
      title: 'Home details',
    },
  ];
  export default routeConfig;