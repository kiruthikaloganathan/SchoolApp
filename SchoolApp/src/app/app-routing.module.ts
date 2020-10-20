import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './authentication/services/auth-guard.service';

import { AdminsetupComponent } from './adminsetup/adminsetup.component'

import { ComplaintComponent } from './complaint/complaint.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AdmissionComponent } from './admission/admission.component';
import { StudentPromotionComponent } from './student-promotion/student-promotion.component';
import { SpecialNeedChildrenComponent } from './special-need-children/special-need-children.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { TryingformidComponent } from './tryingformid/tryingformid.component';
import { AddFeesGroupComponent } from './add-fees-group/add-fees-group.component';
import { AddFeesTypeComponent } from './add-fees-type/add-fees-type.component';
import { AddFeesDiscountComponent } from './add-fees-discount/add-fees-discount.component';
import { TableFeesGroupComponent } from './table-fees-group/table-fees-group.component';
import { FeesMasterListComponent } from './fees-master-list/fees-master-list.component';
import { CollectFeesComponent } from './collect-fees/collect-fees.component';
import { FeesPaymentComponent } from './fees-payment/fees-payment.component';
import { FeesDueComponent } from './fees-due/fees-due.component';
import { BankPaymentComponent } from './bank-payment/bank-payment.component';
import { AccountComponent } from './account/account.component';
import { ChartOfAccountComponent } from './chart-of-account/chart-of-account.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { ProfitComponent } from './profit/profit.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { SearchincomeComponent } from './searchincome/searchincome.component';
import { DepartmentsComponent } from './departments/departments.component';
import { StaffInformationComponent } from './staff-information/staff-information.component';
import { AccountsStudentComponent } from './accounts-student/accounts-student.component';
import { FeesComponent } from './fees/fees.component';
import { SearchComponent } from './search/search.component';
import { DesignationComponent } from './designation/designation.component';
import { PersonalDirectoryComponent } from './personal-directory/personal-directory.component';
import { StaffPresenceComponent } from './staff-presence/staff-presence.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import{LeaveTypeComponent} from './leave-type/leave-type.component';
import { LeaveDefineComponent } from './leave-define/leave-define.component';
import { ApproveLeaveRequestComponent } from './approve-leave-request/approve-leave-request.component';
import { PendingLeaveComponent } from './pending-leave/pending-leave.component';




const routes: Routes = [
  { path: '', redirectTo: '/article', pathMatch: 'full' },
  {
    path: '', canActivate: [AuthGuardService], children: [
      {
        path: 'article',
        loadChildren: './article/article.module#ArticleModule'
      },

    ]
  },
  { path: 'login', loadChildren: './authentication/auth.module#AuthModule' },
  { path: 'adminsetup', component: AdminsetupComponent, pathMatch: 'full' },
  { path: 'complaint', component: ComplaintComponent, pathMatch: 'full' },
  { path: 'certificate', component: CertificateComponent, pathMatch: 'full' },
  { path: 'admission', component: AdmissionComponent, pathMatch: 'full'},
  {path:'kavi',component: StudentPromotionComponent, pathMatch: 'full'},
  {path: 'specialneed', component: SpecialNeedChildrenComponent, pathMatch:'full'},
  {path:'managestudent',component:ManageStudentComponent,pathMatch:'full'},
  {path:'formid',component:TryingformidComponent,pathMatch:'full'},
  {path:'addfeesgroup',component:AddFeesGroupComponent,pathMatch:'full'},
  {path:'addfeestype',component:AddFeesTypeComponent,pathMatch:'full'},
  {path:'addfeesdiscount',component:AddFeesDiscountComponent,pathMatch:'full'},
  {path:'tablefeesgroup',component:TableFeesGroupComponent,pathMatch:'full'},
  {path:'feesmasterlist',component:FeesMasterListComponent,pathMatch:'full'},
  {path:'collectfees',component:CollectFeesComponent,pathMatch:'full'},
  {path:'feespayment',component:FeesPaymentComponent,pathMatch:'full'},
  {path:'feesdue',component:FeesDueComponent,pathMatch:'full'},
  {path:'bankpayment',component:BankPaymentComponent,pathMatch:'full'},
  {path:'account',component:AccountComponent,pathMatch:'full'},
  {path:'chartofaccount',component:ChartOfAccountComponent,pathMatch:'full'},
  {path:'bankaccount',component:BankAccountComponent,pathMatch:'full'},
  {path:'addincome',component:AddIncomeComponent,pathMatch:'full'},
  {path:'profit',component:ProfitComponent,pathMatch:'full'},
  {path:'addexpense',component:AddexpenseComponent,pathMatch:'full'},
  {path:'searchincome',component:SearchincomeComponent,pathMatch:'full'},
  {path:'departments',component:DepartmentsComponent,pathMatch:'full'},
  {path:'staffinformation',component:StaffInformationComponent,pathMatch:'full'},
  {path:'accountsstudent',component:AccountsStudentComponent,pathMatch:'full'},
  {path:'fees',component:FeesComponent,pathMatch:'full'},
  {path:'search',component:SearchComponent,pathMatch:'full'},
  {path:'designation',component:DesignationComponent,pathMatch:'full'},
  {path:'personaldirectory',component:PersonalDirectoryComponent,pathMatch:'full'},
  {path:'staffpresence',component:StaffPresenceComponent,pathMatch:'full'},
  {path:'staffattendance',component:StaffAttendanceComponent,pathMatch:'full'},
  {path:'humanresource',component:HumanResourceComponent,pathMatch:'full'},
  {path:'leavetype',component:LeaveTypeComponent,pathMatch:'full'},
  {path:'leavedefine',component:LeaveDefineComponent,pathMatch:'full'},
  {path:'approveleaverequest',component:ApproveLeaveRequestComponent,pathMatch:'full'},
  {path:'pendingleave',component:PendingLeaveComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
