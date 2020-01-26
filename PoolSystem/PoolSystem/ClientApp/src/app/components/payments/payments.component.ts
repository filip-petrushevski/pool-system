import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Payment Type', 'Created On', 'Employee ID', 'Member ID', 'Card ID'];
  dataSource;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getPayments().subscribe(res => {
      res.forEach(p => p.createdOn = `${p.createdOn.split('T')[0]} ${p.createdOn.split('T')[1].split('\.')[0]}`);
      this.dataSource = res;
      console.log(this.dataSource);
    }, err => {
      console.log(err);
    });
  }

  newPayment() {
    this.router.navigate(['newpayment']);
  }
}
