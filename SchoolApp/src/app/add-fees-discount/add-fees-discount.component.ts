import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterPreloader } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-add-fees-discount',
  templateUrl: './add-fees-discount.component.html',
  styleUrls: ['./add-fees-discount.component.css']
})
export class AddFeesDiscountComponent implements OnInit {
  student:Array<{studentname:string,discountcode:number,discounttype:string,amount:number,paymentdate:Date }>=[];
response:any;
objfeesdiscount:{};
  constructor(private router:Router,private Feesdiscountservice:DataserviceService) { }

  ngOnInit() {
// this.respons=this.datas.kavitha;
this.response=this.Feesdiscountservice.kavitha;
alert(this.response);
this.AddFeesDiscount.patchValue({firstname:this.response});

    this.student=[{studentname:"Fee M",discountcode:123,discounttype:"Once",amount:3000,paymentdate:new Date()},{studentname:"Hostel Fee",discountcode:234,discounttype:"Term",amount:4000,paymentdate:new Date()},
  {studentname:"Course Fee",discountcode:132,discounttype:"Once",amount:5000,paymentdate:new Date()}]
  }
  AddFeesDiscount = new FormGroup({
    
    firstname : new FormControl(),
    dcode:new FormControl(),
    amount:new FormControl()
    
  });
  
  myFunction(){
    
    
    let namee=this.AddFeesDiscount.get('firstname').value;
    let fgroup=this.AddFeesDiscount.get('dcode').value;
    let descrip=this.AddFeesDiscount.get('amount').value;
    this.Feesdiscountservice.kavitha=namee;
    this.objfeesdiscount={Name:namee,Fgroup:fgroup,Description:descrip};
    this.Feesdiscountservice.FeesDiscount(this.objfeesdiscount).subscribe(
      res=>{
        if(res>0){
          alert('success');
        }
        else{
          alert('not success');
        }
        console.log(res);
      },
      res=>{
        alert('error');
      }
    )
    if(this.validation(namee,fgroup,descrip)){
    this.router.navigate(['feesmasterlist'])
    }
  }
  reverseFunction(){
    this.router.navigate(['addfeestype'])
  }
  validation(namee,fgroup,descrip){
    if(namee==undefined || namee==""){
      alert('please enter your name')
      return false;
    }
    else{
      return true;
    }

  }

}
