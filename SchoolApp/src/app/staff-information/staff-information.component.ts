import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-staff-information',
  templateUrl: './staff-information.component.html',
  styleUrls: ['./staff-information.component.css']
})
export class StaffInformationComponent implements OnInit {
  Role1: Array<{ RoleId: number, RoleName: string }> = [];
  Department: Array<{ DepartmentId: number, DepartmentName: string }> = [];
  objstaffinfo = {};

  constructor(private StaffinfoService: DataserviceService) { }

  ngOnInit() {
    this.Role1 = [{ RoleId: 1, RoleName: "Teacher" }, { RoleId: 2, RoleName: "Teaching Assistant" }, { RoleId: 3, RoleName: "Cleaner" }];
    this.Department = [{ DepartmentId: 1, DepartmentName: "CSE" }, { DepartmentId: 2, DepartmentName: "ECE" }, { DepartmentId: 3, DepartmentName: "EEE" }]
  }
  StaffInformation = new FormGroup({
    staffno: new FormControl(),
    role: new FormControl(), department: new FormControl(), design: new FormControl(), fn: new FormControl(), ln: new FormControl(), fan: new FormControl(),
    mn: new FormControl(), email: new FormControl(), gender: new FormControl(), dob: new FormControl(), dfj: new FormControl(), mobile: new FormControl(),
    marital: new FormControl(), en: new FormControl(), dl: new FormControl(), cd: new FormControl(), pa: new FormControl(), qualify: new FormControl(),
    exp: new FormControl(), epf: new FormControl(), salary: new FormControl(), contract: new FormControl(), location: new FormControl(), baccname: new FormControl(),
    bankname: new FormControl(), nabranch: new FormControl(), facebookurl: new FormControl(), twitter: new FormControl(), linkedin: new FormControl(),
    instragram: new FormControl(), documinfo: new FormControl(), joiningle: new FormControl(), otherdocum: new FormControl(),
  })
  myFunction() {
    let Staffno = this.StaffInformation.get('staffno').value;
    let Role = this.StaffInformation.get('role').value;
    let Department = this.StaffInformation.get('department').value;
    let Design = this.StaffInformation.get('design').value;
    let Fn = this.StaffInformation.get('fn').value;
    let Ln = this.StaffInformation.get('ln').value;
    let Fan = this.StaffInformation.get('fan').value;
    let Mn = this.StaffInformation.get('mn').value;
    let Email = this.StaffInformation.get('email').value;
    let Gender = this.StaffInformation.get('gender').value;
    let Dob = this.StaffInformation.get('dob').value;
    let Dfj = this.StaffInformation.get('dfj').value;
    let Mobile = this.StaffInformation.get('mobile').value;
    let Marital = this.StaffInformation.get('marital').value;
    let En = this.StaffInformation.get('en').value;
    let Dl = this.StaffInformation.get('dl').value;
    let Cd = this.StaffInformation.get('cd').value;
    let Pa = this.StaffInformation.get('pa').value;
    let Qualify = this.StaffInformation.get('qualify').value;
    let Exp = this.StaffInformation.get('exp').value;
    let Epf = this.StaffInformation.get('epf').value;
    let Salary = this.StaffInformation.get('salary').value;
    let Contract = this.StaffInformation.get('contract').value;
    let Location = this.StaffInformation.get('location').value;
    let Baccname = this.StaffInformation.get('baccname').value;
    let Bankname = this.StaffInformation.get('bankname').value;
    let Nabranch = this.StaffInformation.get('nabranch').value;
    let Facebookurl = this.StaffInformation.get('facebookurl').value;
    let Twitter = this.StaffInformation.get('twitter').value;
    let Linkedin = this.StaffInformation.get('linkedin').value;
    let Instragram = this.StaffInformation.get('instragram').value;
    let Documinfo = this.StaffInformation.get('documinfo').value;
    let Joiningle = this.StaffInformation.get('joiningle').value;
    let Otherdocum = this.StaffInformation.get('otherdocum').value;
    
    if(this.validation(Staffno, Role, Department, Design, Fn, Ln, Fan, Mn, Email, Gender, Dob, Dfj, Mobile, Marital, En, Dl, Cd, Pa, Qualify, Exp, Epf, Salary, Contract, Location,
      Baccname, Bankname, Nabranch, Facebookurl, Twitter, Linkedin, Instragram, Documinfo, Joiningle, Otherdocum)){
        this.objstaffinfo = {StaffNo:Staffno,Department:Department,Design:Design,Fn:Fn,Ln:Ln,mn:Mn,email:Email,gender:Gender,dob:Dob,dfj:Dfj,mobile:Mobile,marital:Marital,EN:En,
        dl:Dl,Cd:Cd,PA:Pa,QUALIFY:Qualify,EXP:Exp,EPF:Epf,SALARY:Salary,CONTRACT:Contract,LOCATION:Location,BACCNAME:Baccname,BANKNAME:Bankname,NABRANCH:Nabranch,FACEBOOKURL:Facebookurl,
        TWITTER:Twitter,LinkedIN:Linkedin,INSTRAGRAM:Instragram,DOCUMINFO:Documinfo,JOININGLE:Joiningle,OTHERDOCUM:Otherdocum
        }
        this.StaffinfoService.StaffInfo(this.objstaffinfo).subscribe(
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
  validation(Staffno, Role, Department, Design, Fn, Ln, Fan, Mn, Email, Gender, Dob, Dfj, Mobile, Marital, En, Dl, Cd, Pa, Qualify, Exp, Epf, Salary, Contract, Location,
    Baccname, Bankname, Nabranch, Facebookurl, Twitter, Linkedin, Instragram, Documinfo, Joiningle, Otherdocum) {
      debugger;
    if (Staffno == undefined || Staffno == "") {
      alert('please enter the staffno');
      return false;
    }
    else if (Role == undefined || Role == "") {
      alert('please enter the role');
      return false;
    }
    else if (Department == undefined || Department == "") {
      alert('please enter the department')
      return false;
    }
    else if (Design == undefined || Design == "") {
      alert('please enter the design')
      return false;
    }
    else if(Fn==undefined||Fn==""){
      alert('please enter the firstname')
      return false;
    }
    else if(Ln==undefined||Ln==""){
      alert('please enter the lastname');
      return false;
    }
    else if(Fan==undefined||Fan==""){
      alert('please enter the fan')
      return false;
    }
    else if(Mn==undefined||Mn==""){
      alert('please enter the mn');
      return false;
    }
    else if(Email==undefined||Email==""){
      alert('please enter the email');
      return false;
    }
    else if(Gender==undefined||Gender==""){
      alert('please enter the gender');
      return false;
    }
    else if(Dob==undefined||Dob==""){
      alert('please enter the dob')
      return false;
    }
    else if(Dfj==undefined||Dfj==""){
      alert('please enter the dfj')
      return false;
    }
    else if(Mobile==undefined||Mobile==""){
      alert('please enter the Mobileno')
      return false;
    }
    else if(Marital==undefined||Marital==""){
      alert('please enter the marital');
      return false;
    }
    else if(En==undefined||En==""){
      alert('enter en')
      return false;
    }
    else if(Dl==undefined||Dl==""){
      alert('enter dl');
      return false;
    }
    else if(Cd==undefined||Cd==""){
      alert('enter cd');
      return false;
    }
    else if(Pa==undefined||Pa==""){
      alert('enter pa');
      return false;
    }
    else if(Qualify==undefined||Qualify==""){
      alert('please enter qualify');
      return false;
    }
    else if(Exp==undefined||Exp==""){
      alert('please enter exp');
      return false;
    }
    else if(Epf==undefined||Epf==""){
      alert('please enter the epf');
      return false;
    }
    else if(Salary==undefined||Salary==""){
      alert('please enter the salary');
      return false;
    }
    else if(Contract==undefined||Contract==""){
      alert('enter the contract');
      return false;
    }
    else if(Location==undefined||Location==""){
      alert('enter the location');
      return false;
    }
    else if(Baccname==undefined||Baccname==""){
      alert('please enter the bank account name');
      return false;
    }
    else if(Bankname==undefined||Bankname==""){
      alert('please enter the bank name');
      return false;
    }
    else if(Nabranch==undefined||Nabranch==""){
      alert('please enter the nabranch');
      return false;
    }
    else if(Facebookurl==undefined||Facebookurl==""){
      alert('enter facebookurl');
      return false;
    }
    else if(Documinfo==undefined||Documinfo==""){
      alert('enter documinfo');
      return false;
    }
    else if(Joiningle==undefined||Joiningle==""){
      alert('enter joiningletter');
      return false;
    }
    else if(Otherdocum==undefined||Otherdocum==""){
      alert('enter the otherdocum')
      return false;
    }
    else{
      return true;
    }


  }

}
