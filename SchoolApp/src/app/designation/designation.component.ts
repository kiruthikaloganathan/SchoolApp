import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  Designation:Array<{Designation:string,Action:string,CreatedAt:Date,CreatedBy:string}>=[];
  objdesign={};
  objsearch={};

  constructor(private DesignationService:DataserviceService) { }

  ngOnInit() {
    this.Designation=[{Designation:"Accountant",Action:" ",CreatedAt:new Date,CreatedBy:"not applicable"},
  {Designation:"Admin",Action:" ",CreatedAt:new Date,CreatedBy:"not applicable"},
{Designation:"Assistant head master",Action:" ",CreatedAt:new Date,CreatedBy:"not applicable"},
{Designation:"Assistant teacher",Action:" ",CreatedAt:new Date,CreatedBy:"not applicable"},
{Designation:"director",Action:" ",CreatedAt:new Date,CreatedBy:"not applicable"},
{Designation:"faculty",Action:" ",CreatedAt:new Date,CreatedBy:"not applicable"}]
 
  }
  Designation1 = new FormGroup({
   titledesign: new FormControl()
  });
  Search(){
    let titlesearch=this.Designation1.get('titledesign').value;
    this.objsearch={designation:titlesearch}

  }

  myFunction(){
    let Titledesign=this.Designation1.get('titledesign').value;
    if(this.validation(Titledesign)){
      this.Designation.push({Designation:Titledesign,Action:"not applicable",CreatedAt:new Date,CreatedBy:"NOT applicable"})
    }
    this.objdesign={design:Titledesign}
    this.DesignationService.Design(this.objdesign).subscribe(
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

  }
  validation(Titledesign){
    if(Titledesign==undefined || Titledesign==""){
      alert('please enter the title');
      return false;
    }
    else{
      return true;

    }
  }

}
