import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-fees-due',
  templateUrl: './fees-due.component.html',
  styleUrls: ['./fees-due.component.css']
})
export class FeesDueComponent implements OnInit {
  feesgroup:Array<{fid:number,fname:string}>=[];
  feesdue:Array<{feesgroup:string,selectclass:string,selectsection:string,paymentdate:Date,CreatedAt:Date,CreatedBy:string}>=[];
  objfeesdue:{};

  constructor(private router:Router,private Feesdueservice: DataserviceService) { }

  ngOnInit() {
    this.feesgroup=[{fid:1,fname:"Fixed Term"},{fid:2,fname:"Instalment"}];
    this.feesdue=[{feesgroup:"Fixed",selectclass:"Year 1",selectsection:"A",paymentdate:new Date(),CreatedAt:new Date,CreatedBy:""},{feesgroup:"Term Time",selectclass:"Year 2",selectsection:"B",paymentdate:new Date(),CreatedAt:new Date,CreatedBy:""},
  {feesgroup:"Instalment",selectclass:"Year 3",selectsection:"C",paymentdate:new Date(),CreatedAt:new Date,CreatedBy:""}];
  }
  FeesDue= new FormGroup({
    fgroup:new FormControl(),
    
  });
  myFunction(){
    let fgp=this.FeesDue.get('fgroup').value;
    this.Feesdueservice.kavitha=fgp;
    this.objfeesdue={Fgp:fgp};
    this.Feesdueservice.FeesDue(this.objfeesdue).subscribe(
      res=>{
        if(res>0){
          alert('save');
        }
        else{
          alert('error');
        }
        console.log(res)
      },
      error => {
        alert('error');
      })
    if(this.validation(fgp)){
    this.router.navigate(['bankpayment'])
    }

  }
  reverseFunction(){
    this.router.navigate(['feespayment'])
  }
  validation(fgp){
    if(fgp==undefined || fgp==""){
      alert('please enter your fees')
      return false;
    }
    else{
      return true;
    }
  }

}
