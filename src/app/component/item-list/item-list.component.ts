import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/model/item';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public items: item[] | null = [];
  constructor(private itemService: ItemService){

   
  }

  ngOnInit() {
    this.itemService.getItems()
   .subscribe((res) => {
    if(res.statusText!="OK"){
      alert("some error occured");
    }
    this.items=res.body;
   });


   this.itemService.getItemById(2);
  
  }
}
