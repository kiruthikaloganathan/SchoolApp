import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
SelectType:Array<{SelectId:number,SelectName:string}>=[];
objsearch:{};

  constructor(private SearchService:DataserviceService) { }

  ngOnInit() {
    this.SelectType=[{SelectId:1,SelectName:"BANK ACCOUNT"},{SelectId:2,SelectName:"PROFIT"}];
  }
  myFunction(datefrom,dateto,selecttype){
    console.log(datefrom.value);
    console.log(dateto.value);
    console.log(selecttype.value);
    this.objsearch={Datefrom:datefrom,Dateto:dateto,Selecttype:selecttype};
    this.SearchService.Search(this.objsearch).subscribe(
      res =>{
        if(res>0){
          alert('success');
        }
        else{
          alert('not success');
        }
        console.log(res);
      },
      res =>{
        alert('error');
      }
    )

  }

}
