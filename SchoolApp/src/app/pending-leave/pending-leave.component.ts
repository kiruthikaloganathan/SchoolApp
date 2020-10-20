import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-pending-leave',
  templateUrl: './pending-leave.component.html',
  styleUrls: ['./pending-leave.component.css']
})
export class PendingLeaveComponent implements OnInit {
  objpendingleaveSearch={};
  objpendingleavesave={};

  constructor(private PendingLeaveService:DataserviceService) { }
  PendingLeave=new FormGroup({
    search:new FormControl(),
    applyDate:new FormControl(),
    leaveType:new FormControl(),
    datefrom:new FormControl(),
    dateTo:new FormControl(),
    reason:new FormControl(),
    file:new FormControl()
  })

  ngOnInit() {
  }
  PendingLeaveSearch(){
    let Search=this.PendingLeave.get('search').value;
    let Applydate=this.PendingLeave.get('applyDate').value;
    let Leavetype=this.PendingLeave.get('leaveType').value;
    let Datefrom=this.PendingLeave.get('datefrom').value;
    let Dateto=this.PendingLeave.get('dateTo').value;
    let Reason=this.PendingLeave.get('reason').value;
    this.objpendingleaveSearch={SEARCH:Search,APPLYDATE:Applydate,LEAVETYPE:Leavetype,DATEFROM:Datefrom,DATETO:Dateto,REASON:Reason};
    this.PendingLeaveService.PendingLeaveGet(this.objpendingleaveSearch).subscribe(
      res=>{
        this.PendingLeave=res as any;
      },
      erroe=>{
        alert("error");
      }

    )
    
  }
  PendingLeaveSave(){
    let Search1=this.PendingLeave.get('search').value;
    let Applydate1=this.PendingLeave.get('applyDate').value;
    let Leavetype1=this.PendingLeave.get('leaveType').value;
    let Datefrom1=this.PendingLeave.get('datefrom').value;
    let Dateto1=this.PendingLeave.get('dateTo').value;
    let Reason1=this.PendingLeave.get('reason').value;
    this.objpendingleavesave={SEARCH1:Search1,APPLYDATE1:Applydate1,LEAVETYPE1:Leavetype1,DATEFROM1:Datefrom1,DATETO1:Dateto1,REASON1:Reason1};
    this.PendingLeaveService.PendingLeavePost(this.objpendingleavesave).subscribe(
      res=>{
        if(res>0){
          alert('success');
        }
        else{
          alert('not success');
        }
          console.log(res);
      },
      error=>{
        alert('error');
      }
    )
  }
  validation(){}

}
