import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-personal-directory',
  templateUrl: './personal-directory.component.html',
  styleUrls: ['./personal-directory.component.css']
})
export class PersonalDirectoryComponent implements OnInit {
  ROLE:Array<{RoleId:number,RoleNumber:string}>=[];
  PersonalDirect:Array<{Role:string,Department:string,Mobile:number,Email:string,CreatedAt:Date,CreatedBy:string}>=[];
  objpersonaldirect={}

  constructor(private personaldirectoryService:DataserviceService) { }
  PersonalDirectory= new FormGroup({
    role:new FormControl(),
    staffid:new FormControl(),
    staffname:new FormControl()
  });

  ngOnInit() {
    this.ROLE=[{RoleId:1,RoleNumber:"SUPER ADMIN"},{RoleId:2,RoleNumber:"TEACHER"},{RoleId:3,RoleNumber:"ADMIN"},
  {RoleId:4,RoleNumber:"ACCOUNTANT"},{RoleId:5,RoleNumber:"RECEPTIONIST"},{RoleId:6,RoleNumber:"LIBRARIAN"},{RoleId:7,RoleNumber:"DRIVER"}];
  this.PersonalDirect=[{Role:"TEACHER",Department:"ADMIN",Mobile:2345,Email:"",CreatedAt:new Date,CreatedBy:""},{Role:"DRIVER",Department:"ADMIN",Mobile:9876,Email:"",CreatedAt:new Date,CreatedBy:""}];
  
  }
  myFunction(){
    let ROLE=this.PersonalDirectory.get('role').value;
    let STAFFID=this.PersonalDirectory.get('staffid').value;
    let STAFFNAME=this.PersonalDirectory.get('staffname').value
    if(this.validation(ROLE,STAFFID,STAFFNAME)){
      this.PersonalDirect.push({Role:ROLE,Department:"not applicable",Mobile:9,Email:"not applicable",CreatedAt:new Date,CreatedBy:"not applicable"});
      this.objpersonaldirect={ROle:ROLE,STaffid:STAFFID,STaffname:STAFFNAME}
      this.personaldirectoryService.PersonalDirect(this.objpersonaldirect).subscribe(
        res=>{
          if(res>0){
            alert('success')
          }
          else{
            alert('not success')
          }
          console.log(res)
        },
        res=>{
          alert('error')
        }
      )
    }
  }
 validation(ROLE,STAFFID,STAFFNAME){
   if(ROLE==undefined || ROLE==""){
    alert('please enter the role')
    return false;
   }
   else if(STAFFID==undefined || STAFFID== ""){
     alert('please enter the id');
     return false;
   }
   else if(STAFFNAME==undefined || STAFFNAME==""){
     alert('please enter the name');
     return false;
   }
   else{
     return true;
   }
 }

}
