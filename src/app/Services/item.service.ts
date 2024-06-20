import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { item } from '../model/item';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private BASE_URL = 'http://localhost:8003/';
  public items: item[] | null = [];

  constructor(private http: HttpClient) {
    
  }
  getItems() {
    return this.http.get<item[]>(this.BASE_URL + 'menus', {
      observe: 'response',
    });
  }

  getItemById(id: any) {
    return this.http
      .get<item>(this.BASE_URL + 'menus/' + id, { observe: 'response' });
    // Return undefined if the item with the specified ID is not found.
  }
}
