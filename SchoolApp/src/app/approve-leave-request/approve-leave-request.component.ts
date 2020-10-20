import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-approve-leave-request',
  templateUrl: './approve-leave-request.component.html',
  styleUrls: ['./approve-leave-request.component.css']
})
export class ApproveLeaveRequestComponent implements OnInit {
  LeaveRequest:Array<{Name:string,Type:string,CreatedAt:Date,CreatedBy:string}>=[];
  objLeaveRequestSave={};
  objLeaveRequestSearch={}

  constructor(private LeaveRequestService:DataserviceService) { }
  ApproveLeaveRequest=new FormGroup({
    search:new FormControl(),
  })


  ngOnInit() {
    this.LeaveRequest=[{Name:"Dheeran",Type:"Approved Leave",CreatedAt:new Date,CreatedBy:""},{Name:"Kiruthika",Type:"Public Holidays",CreatedAt:new Date,CreatedBy:""}]
  }
  ApproveleaveSearch(){
    let Search=this.ApproveLeaveRequest.get('search').value;
    this.objLeaveRequestSearch={SEARCH:Search};
    this.LeaveRequestService.LeaverequestGet(this.objLeaveRequestSearch).subscribe(
      res=>{
        this.LeaveRequest= res as any;
      },
      error=>{
        alert('error')
      }
    )
  }
  ApproveleaveSave(){
    let Search1=this.ApproveLeaveRequest.get('search').value;
    this.objLeaveRequestSave={SEARCH1:Search1};
    this.LeaveRequestService.LeaverequestPost(this.objLeaveRequestSave).subscribe(
      res=>{
        if(res>0){
          alert('success');
        }
        else{
          alert('not success');
        }
        console.log(res)
      },
      error=>{
        alert('error')
      }
    )
  }

}
