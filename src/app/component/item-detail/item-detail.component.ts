import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { item } from 'src/app/model/item';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit{

  constructor(private itemService: ItemService, private route: ActivatedRoute){
    
   
  }
  
  public item!: item | null;
  public id!: number;

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {

        this.id = params['id'];
       
      }
    );


    this.itemService.getItemById(this.id).subscribe((res)=>{
      this.item=res.body;
      
    })
     
  }
}
