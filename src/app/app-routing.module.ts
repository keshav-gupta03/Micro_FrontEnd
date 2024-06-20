import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'item', component: ItemDetailComponent },
  { path: 'home', component: HomePageComponent },
  { path:'cart', component: CartItemComponent},
  { path: '', component: HomePageComponent, pathMatch:'full'},
  { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
