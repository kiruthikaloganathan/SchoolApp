import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import{Router} from '@angular/router';
import { AuthService} from '../authentication/services/auth.service'
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent  {
   arr: Array<{Classid: number, ClassName: string }>=[];
   section: Array<{Sectionid: number, SectionName: string}>=[];
   subject: Array<{Subjectid: number, SubjectName: string}>=[];
   teacher: Array<{Teacherid: number, TeacherName: string}>=[];
   sports: Array<{Sportsid: number, SportsName: string}>=[];
   bloodgroup: Array<{Bloodgroupid:number,BloodgroupName: string}>=[];
   religion: Array<{Religionid:number, ReligionName: string}>=[];
   nationality: Array<{Nationalityid:number, NationalityName:string}>=[];
   student: Array<{Studentid: number,studentname: string,fathername:string,mothername:string,studentage:number,contactnumber:number,bloodgroup:string}>=[]


//var arr=[]
 // Arr: string[];
 //let  Arr=["A","B","C","D"];
  invalidCredentialMsg: string;


    constructor(private authService: AuthService, private router: Router) {
    }
    ngOnInit() {
      this.arr = [{ Classid: 1, ClassName: 'year1' }, { Classid: 2, ClassName: 'year2' }, { Classid: 3, ClassName: 'year3' }];
      this.section =[{Sectionid: 1, SectionName:'A'},{Sectionid: 2, SectionName: 'B'}, {Sectionid:3, SectionName: 'C'}];
      this.subject=[{Subjectid: 1, SubjectName: 'English'},{Subjectid:2, SubjectName:'Maths'},{Subjectid: 3, SubjectName: 'Science'}];
      this.teacher =[{Teacherid: 1, TeacherName: 'John'},{Teacherid: 2, TeacherName: 'Marni'},{Teacherid: 3, TeacherName: 'Emma'}];
      this.sports=[{Sportsid: 1, SportsName:'FootBall'},{Sportsid: 2, SportsName:'Cricket'},{Sportsid: 3,SportsName:'BasketBall'}];
      this.bloodgroup=[{Bloodgroupid:1, BloodgroupName:'o+'},{Bloodgroupid:2, BloodgroupName:'o-'},{Bloodgroupid:3,BloodgroupName:'B+'}];
      this.religion=[{Religionid:1,ReligionName:'Hindu'},{Religionid:2,ReligionName:'Christian'},{Religionid:3,ReligionName:'Muslim'}];
      this.nationality=[{Nationalityid:1,NationalityName: 'Indian'},{Nationalityid:2,NationalityName:'British'},{Nationalityid:3,NationalityName:'American'}];
      this.student=[{Studentid:1,studentname:'John',fathername:'Hari',mothername:'Mary',studentage:8,contactnumber:345678,bloodgroup:'A+'},
      {Studentid:2,studentname:'Archie',fathername:'Yung',mothername:'Maria',studentage:9,contactnumber:12345,bloodgroup:'B+'}]
    }
  
    admission = new FormGroup({
      Class: new FormControl(),
      Section: new FormControl(),
      Subject: new FormControl(),
      Teacher1: new FormControl(),
      Sports1: new FormControl(),
      Bloodgroup: new FormControl(),
      Religion: new FormControl(),
      Nationality: new FormControl()
    });
    onFormSubmit() {
      
      let clas = this.admission.get('Class').value;
      let sect = this.admission.get('Section').value;
      let subj = this.admission.get('Subject').value;
      let tec = this.admission.get('Teacher1').value;
      let spor = this.admission.get('Sports1').value;
      let bloo = this.admission.get('Bloodgroup').value;
      let relig =this.admission.get('Religion').value;
      let nation=this.admission.get('Nationality').value
      this.authService.isUserAuthenticated(clas,sect).subscribe(
        authenticated => {
          if (authenticated) {
            let url ='/adminsetup';// this.authService.getRedirectUrl();
            console.log('Redirect Url:' + url);
            this.router.navigate([url]);
          } else {
            this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
          }
        }
      );
    }
  }
  

 // ngOnInit() {
 // }

//}
