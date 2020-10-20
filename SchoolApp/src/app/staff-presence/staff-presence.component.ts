import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-staff-presence',
  templateUrl: './staff-presence.component.html',
  styleUrls: ['./staff-presence.component.css']
})
export class StaffPresenceComponent implements OnInit {
  ROLE:Array<{RoleId:number,RoleName:string}>=[];
  objstaffpresence={};

  constructor(private StaffpresenceService:DataserviceService) { }
  StaffPresence=new FormGroup({
    role: new FormControl(),
    date:new FormControl()
  })

  ngOnInit() {
    this.ROLE=[{RoleId:1,RoleName:"TEACHER"},{RoleId:2,RoleName:"ADMIN"},{RoleId:3,RoleName:"Accountant"},{RoleId:4,RoleName:"Receptionist"},
  {RoleId:5,RoleName:"LIBRARIAN"},{RoleId:6,RoleName:"DRIVER"}]
  }
  myFunction(){
    let Role=this.StaffPresence.get('role').value;
    let Date=this.StaffPresence.get('date').value;
    if(this.validation(Role,Date)){
      this.objstaffpresence={ROLE:Role,DATE:Date};
      this.StaffpresenceService.StaffPresence(this.objstaffpresence).subscribe(
        res=>{
          if(res>0){
            alert('success')

          }
          else{
            alert('not success')
          }
          console.log(res);
        },
        res=>{
          alert('error');
        }
      )

    }
  }
  validation(Role,Date){
    if(Role==undefined || Role==""){
      alert('please enter the role');
      return false;
    }
    else if(Date==undefined || Date==""){
      alert('please enter the date')
      return false;
    }
    else{
      return true;
    }
  }

}
