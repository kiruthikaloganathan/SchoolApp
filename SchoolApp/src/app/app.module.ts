import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LogoutComponent } from './authentication/logout.component';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { AuthService } from './authentication/services/auth.service';
import { AdminsetupComponent }  from './adminsetup/adminsetup.component';

import { ComplaintComponent } from './complaint/complaint.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AdmissionComponent } from './admission/admission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import { DesignationComponent } from './designation/designation.component';
import { PersonalDirectoryComponent } from './personal-directory/personal-directory.component';
import { StaffPresenceComponent } from './staff-presence/staff-presence.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { LeaveDefineComponent } from './leave-define/leave-define.component';
import { ApproveLeaveRequestComponent } from './approve-leave-request/approve-leave-request.component';
import { PendingLeaveComponent } from './pending-leave/pending-leave.component';
@NgModule({

  declarations: [
   
    LogoutComponent,
    AppComponent,
    AdminsetupComponent,
    
    ComplaintComponent,
    CertificateComponent,
    AdmissionComponent,
    StudentPromotionComponent,
    SpecialNeedChildrenComponent,
    ManageStudentComponent,
    TryingformidComponent,
    AddFeesGroupComponent,
    AddFeesTypeComponent,
    AddFeesDiscountComponent,
    TableFeesGroupComponent,
    FeesMasterListComponent,
    CollectFeesComponent,
    FeesPaymentComponent,
    FeesDueComponent,
    BankPaymentComponent,
    AccountComponent,
    ChartOfAccountComponent,
    BankAccountComponent,
    AddIncomeComponent,
    ProfitComponent,
    AddexpenseComponent,
    SearchincomeComponent,
    DepartmentsComponent,
    StaffInformationComponent,
    AccountsStudentComponent,
    FeesComponent,
    SearchComponent,
    DesignationComponent,
    PersonalDirectoryComponent,
    StaffPresenceComponent,
    StaffAttendanceComponent,
    HumanResourceComponent,
    LeaveTypeComponent,
    LeaveDefineComponent,
    ApproveLeaveRequestComponent,
    PendingLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
