import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  kavitha:any;
  headers:HttpHeaders;
  public get() {
    // Get all jogging data
    return this.http.get(this.accessPointUrl + "api/values", { headers: this.headers });
}
public GetOrderedDet(obj) {
    // Get all jogging data
    return this.http.post(this.accessPointUrl + "GetOrderedDetails", JSON.stringify(obj), { headers: this.headers });
}
public bankaccount(objBankSerSave){
  console.log(objBankSerSave);
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objBankSerSave),{headers: this.headers});

}
public AddIncome(objIncomeSerSave){
  console.log(objIncomeSerSave);
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objIncomeSerSave),{headers: this.headers});

}
public Profit(objProfitSerSave){
  console.log(objProfitSerSave);
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objProfitSerSave),{headers: this.headers});
}
public Expense(objExpenseSerSave){
  console.log(objExpenseSerSave);
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objExpenseSerSave),{headers: this.headers});
}
public Search(objSearchSerSave){
  console.log(objSearchSerSave);
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objSearchSerSave),{headers: this.headers})
}
public FeesGroup(objFeesGroupSerSave){
  console.log(objFeesGroupSerSave);
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objFeesGroupSerSave),{headers: this.headers})
}
public FeesType(objFeestypeSerSave){
  console.log(objFeestypeSerSave);
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objFeestypeSerSave),{headers: this.headers})
}
public FeesDiscount(objFeesDisSerSave){
  console.log(objFeesDisSerSave)
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objFeesDisSerSave),{headers: this.headers})
}
public FeesMaster(objFeesmasterSerSave){
  console.log(objFeesmasterSerSave);
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objFeesmasterSerSave),{headers: this.headers})
}
public CollectFees(objcollectfeesSerSave){
  console.log(objcollectfeesSerSave)
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objcollectfeesSerSave),{headers: this.headers})
}
public FeesPayment(objFeesPaymentSerSave){
  console.log(objFeesPaymentSerSave);
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objFeesPaymentSerSave),{headers: this.headers})
}
public FeesDue(objFeesdueSerSave){
  console.log(objFeesdueSerSave)
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objFeesdueSerSave),{headers: this.headers})
}
public Design(objDesignSerService){
  console.log(objDesignSerService);
  return this.http.post("http://api/SaveBankAccount",JSON.stringify(objDesignSerService),{headers:this.headers})
}
public Depart(objDepartSerSave){
  console.log(objDepartSerSave);
  return this.http.post("http://api/designation",JSON.stringify(objDepartSerSave),{headers:this.headers})
}
public StaffInfo(objstaffinfoSerSave){
  console.log(objstaffinfoSerSave);
  return this.http.post("http://api/designation",JSON.stringify(objstaffinfoSerSave),{headers: this.headers})
}
public PersonalDirect(objpersonaldirectSerSave){
  console.log(objpersonaldirectSerSave);
  return this.http.post("http://api/designation",JSON.stringify(objpersonaldirectSerSave),{headers: this.headers})
}
public StaffPresence(objStaffSerSave){
  console.log(objStaffSerSave);
  return this.http.post("https://api/SaveBankAccount",JSON.stringify(objStaffSerSave),{headers:this.headers})
}
public StaffAttendance(objStaffAttenSerSave){
  console.log(objStaffAttenSerSave);
  return this.http.post("http://api/designation",JSON.stringify(objStaffAttenSerSave),{headers:this.headers})
}
public GetSearchCOA(objChartOfAccount){
  console.log(objChartOfAccount);
  return this.http.get("http://api/designation?Head='"+objChartOfAccount.head+"'?Type='"+objChartOfAccount.type+"'")
}
public LeaveSave(objLeaveSerSave){
  console.log(objLeaveSerSave);
  return this.http.post("http://api/designation",JSON.stringify(objLeaveSerSave),{headers: this.headers})
}
public LeaveSearch(objLeavesersearch){
  console.log(objLeavesersearch);
  return this.http.get("http://api/designation?Name='"+objLeavesersearch.name1+"'?Days='"+objLeavesersearch.days1+"'")
}
public PostLeaveDefine(objLeavedefinesave){
  console.log(objLeavedefinesave);
  return this.http.post("http://api/designation",JSON.stringify(objLeavedefinesave),{headers:this.headers})
}
public getLeaveDefine(objLeavedefineSearch){
console.log(objLeavedefineSearch);
return this.http.get("http://api/designation?Role='"+objLeavedefineSearch.ROLE1+"'?LeaveType='"+objLeavedefineSearch.LEAVETYPE1+"'?Days='"+objLeavedefineSearch.DAYS1+"'")
}
public LeaverequestPost(objLeaverequestpostservice){
  console.log(objLeaverequestpostservice);
  return this.http.post("http://api/designation",JSON.stringify(objLeaverequestpostservice),{headers:this.headers})
}
public LeaverequestGet(objLeaverequestget){
  console.log(objLeaverequestget);
  return this.http.get("http://api/designation?Search='"+objLeaverequestget.Search+"'")
}
public PendingLeaveGet(objpendingleaveget){
  console.log(objpendingleaveget);
  return this.http.get("http://api/designation?Search='"+objpendingleaveget.SEARCH+"'")
}
public PendingLeavePost(objpendingleavepost){
  console.log(objpendingleavepost);
  return this.http.post("http://api/designation",JSON.stringify(objpendingleavepost),{headers:this.headers})
}

private accessPointUrl: string = "https://localhost:44332/api/values/" //default url

  constructor(private http:HttpClient) { }
  public getall(obj) {
    console.log(obj);
    return null;
    // Get all jogging data
//     return this.http.post("https://localhost:44332/api/values/" ,JSON.stringify(obj), { headers: this.headers });
 }
}
