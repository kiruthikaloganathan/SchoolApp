import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {
  Profit:Array<{Time:string,Income:number,Expense:number,Profit:number,CreatedAt:Date,CreatedBy:string}>=[];
  objprofit:{};

  constructor(private router:Router,private ProfitService:DataserviceService) { }

  ngOnInit() {
    this.Profit=[{Time:"All",Income:47000,Expense:7878,Profit:888,CreatedAt:new Date,CreatedBy:" "},{Time:"All",Income:8988,Expense:6767,Profit:312,CreatedAt:new Date,CreatedBy:" "}];
  }
  myFunction(datefrom,dateto){
    if(this.validation(datefrom,dateto)){
      this.router.navigate(['addexpense']);
    }
    console.log(datefrom.value);
    console.log(dateto.value);
    this.objprofit={Datefrom:datefrom,Dateto:dateto};
    this.ProfitService.Profit(this.objprofit).subscribe(
      res =>{
        if(res>0){
          alert('success')
        }
        else{
          alert('error')
        }
        console.log(res);
      },
      res => {
        alert('error');
      }
    )
  }
  validation(datefrom,dateto){
  if(datefrom.value==undefined || datefrom.value==""){
    alert('please enter the DateFrom')
    return false;
  }
  else if(dateto.value==undefined || dateto.value==""){
    alert('please enter the DateTO')
    return false
  }
  else{
    return true;
  }
  }
}
