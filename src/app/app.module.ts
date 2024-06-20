import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';

import { CartItemComponent } from './component/cart-item/cart-item.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ItemComponent } from './component/item/item.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItemService } from './Services/item.service';
import { ItemListComponent } from './component/item-list/item-list.component';

import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ItemComponent,
    ItemDetailComponent,
    PageNotFoundComponent,
    CartItemComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
