import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { HomeComponent } from './home.component';



const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
    ]
  })
  export class HomeRoutingModule { }

@NgModule({
    declarations: [HomeComponent, StocksListComponent],
    imports: [CommonModule, FormsModule, HomeRoutingModule],
    providers: [],
})
export class HomeModule { }
