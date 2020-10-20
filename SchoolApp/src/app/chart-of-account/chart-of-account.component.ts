import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-chart-of-account',
  templateUrl: './chart-of-account.component.html',
  styleUrls: ['./chart-of-account.component.css']
})
export class ChartOfAccountComponent implements OnInit {
  Accounttype: Array<{ TypeId: number, TypeName: string }> = [];
  AccountChart: Array<{ CreatedAt: Date, Name: string, Type: string, CreatedBy: string }> = [];
  // Account:Array<{TypeId:number,TypeName:string}>=[];
  // AccountChart:Array<{Name:string,Type:string}>=[];
  objsearch = {};

  constructor(private router: Router, private service: DataserviceService,) { }

  ngOnInit() {
    this.Accounttype = [{ TypeId: 1, TypeName: "Income" }, { TypeId: 2, TypeName: "Expense" }];
    this.AccountChart = [{ CreatedAt: new Date, Name: "Donation", Type: "Income", CreatedBy: "" }, { CreatedAt: new Date, Name: "product Sales", Type: "Income", CreatedBy: "" },
    { CreatedAt: new Date, Name: "Scholership", Type: "Expense", CreatedBy: "" }, { CreatedAt: new Date, Name: "Utilitty Bills", Type: "Utilitty Bills", CreatedBy: "" }];
    //this.AccountChart=res as any;
    //   this.Account=[{TypeId:1,TypeName:"Income"},{TypeId:2,TypeName:"Expense"}];
    //    this.AccountChart=[{Name:"Donation",Type:"Income"},{Name:"Product Sales",Type:"Income"},{Name:"Scholership",Type:"Expense"},{Name:"Utilitty Bills",Type:"Utilitty Bills"}]
  }
  // myFunction(head,type){
  //    if(this.validation(head,type)){
  //  this.AccountChart.push({Name:head.value,Type:type.value})
  //    }
  //    //this.router.navigate(['bankaccount']);
  //   console.log(head.value);
  //   console.log(type.value);
  // }
  // nextpage(head,type){

  //   this.router.navigate(['bankaccount']);

  // }
  // validation(head,type){
  //   if(head.value==undefined || head.value==""){
  //     alert('please enter your Head')
  //     return false;
  //   }
  //   else if(type.value==undefined || type.value==""){
  //     alert('please enter the type')
  //     return false;
  //   }
  //   else{
  //     return true;
  //   }
  // }
  ChartofAccount = new FormGroup({
    head: new FormControl(),
    type: new FormControl(),
  });
  Search() {
    let Head1 = this.ChartofAccount.get('head').value;
    let Type1 = this.ChartofAccount.get('type').value;
    this.objsearch = { head: Head1, type: Type1 }
    this.service.GetSearchCOA(this.objsearch).subscribe(
      res => {
        this.AccountChart = res as any;
      },
      error => {
        alert('error');
      }



    )
  }
  myFunction() {
    let Head = this.ChartofAccount.get('head').value;
    let Type = this.ChartofAccount.get('type').value;
    let obj = { name: "kavitha", age: 30 };
    this.service.getall(obj).subscribe(
      data => {
        // this.IsUserExists = data as any;
        // if (data > 0) {
        //   this.router.navigate([{ outlets: { auth: ['superadmin'] } }]);
        // }
        // else {
        //   alert('data already exsist');
        // }
        this.AccountChart = data;
      },
      error => {
        alert('error');
      });
    if (this.validation(Head, Type)) {
      this.AccountChart.push({ CreatedAt: new Date, Name: Head, Type: Type, CreatedBy: "not applicable" })
    }
  }


  validation(Head, Type) {
    if (Head == undefined || Head == "") {
      alert('please enter your Head');
      return false;
    }
    else if (Type == undefined || Type == "") {
      alert('please enter the type')
      return false;
    }
    else {
      return true;
    }
  }

}
