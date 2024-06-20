import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { item } from 'src/app/model/item';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input("item") item : any;
  ngOnInit(): void {
    
  }
}
