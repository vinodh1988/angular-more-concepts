import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProductrowComponent } from './userhome/productrow/productrow.component';
import { ProductComponent } from './userhome/product/product.component';


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    ProductrowComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule
  ]
})
export class UserModule { }
