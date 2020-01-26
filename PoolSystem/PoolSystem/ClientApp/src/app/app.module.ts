import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardInfosComponent } from './components/card-infos/card-infos.component';
import { MembersComponent } from './components/members/members.component';
import { MatTableModule,
         MatButtonModule,
         MatSnackBarModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatSelectModule} from '@angular/material';
import { MemberComponent } from './components/member/member.component';
import { AddmemberComponent } from './components/addmember/addmember.component';
import { VisitsComponent } from './components/visits/visits.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { PaymentsComponent } from './components/payments/payments.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ServicesComponent,
    FooterComponent,
    CardInfosComponent,
    MembersComponent,
    MemberComponent,
    AddmemberComponent,
    VisitsComponent,
    PaymentsComponent,
    NewPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatSelectModule
  ]
})
export class AppModule { }
