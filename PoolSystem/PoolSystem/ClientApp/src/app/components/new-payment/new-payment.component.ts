import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CardInfo } from 'src/app/models/card-info';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
  creatingCard = true;
  cardInfos: CardInfo[];
  card: Card;
  paymentTypes = [
    {
      value: 0,
      text: 'Cash'
    },
    {
      value: 1,
      text: 'Credit Card'
    },
  ];

  cardForm = new FormGroup({
    id: new FormControl('', Validators.required),
    cardInfoId: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required)
  });

  paymentForm = new FormGroup({
    paymentId: new FormControl('', Validators.required),
    paymentType: new FormControl('', Validators.required),
    memberId: new FormControl('', Validators.required)
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getCardInfos().subscribe(res => {
      this.cardInfos = res;
    }, err => {
      console.log(err);
    });
  }

  convertMonth(month: string): string {
    switch (month) {
      case 'Jan':
        return '01';
      case 'Feb':
        return '02';
      case 'Mar':
        return '03';
      case 'Apr':
        return '04';
      case 'May':
        return '05';
      case 'Jun':
        return '06';
      case 'Jul':
        return '07';
      case 'Aug':
        return '08';
      case 'Sep':
        return '09';
      case 'Oct':
        return '10';
      case 'Nov':
        return '11';
      case 'Dec':
        return '12';
    }
  }

  submitCardForm(): void {
    if (this.cardForm.invalid) {
      return;
    }

    const wholeStartDate = `${this.cardForm.get('startDate').value}`.split(' ');
    const startYear = wholeStartDate[3];
    const startMonth = this.convertMonth(wholeStartDate[1]);
    const startDay = wholeStartDate[2];
    const startDate = `${startYear}-${startMonth}-${startDay} 00:00:00`;

    const wholeEndDate = `${this.cardForm.get('endDate').value}`.split(' ');
    const endYear = wholeEndDate[3];
    const endMonth = this.convertMonth(wholeEndDate[1]);
    const endDay = wholeEndDate[2];
    const endDate = `${endYear}-${endMonth}-${endDay} 00:00:00`;

    this.card = {
      id: +this.cardForm.get('id').value,
      startDate: `${startDate}`,
      endDate: `${endDate}`,
      cardInfoId: +this.cardForm.get('cardInfoId').value
    };

    this.apiService.postCard(this.card).subscribe(res => {
      console.log(res);
      this.creatingCard = false;
    }, err => {
      console.log(err);
    });
  }

  submitPaymentForm(): void {
    if (this.paymentForm.invalid) {
      return;
    }

    const payment: Payment = {
      id: +this.paymentForm.get('paymentId').value,
      paymentType: +this.paymentForm.get('paymentType').value,
      employeeId: +JSON.parse(localStorage.getItem('currentUser')).id,
      cardId: this.card.id,
      memberId: +this.paymentForm.get('memberId').value,
      createdOn: null
    };

    this.apiService.postPayment(payment).subscribe(res => {
      console.log(res);
      this.router.navigate(['payments']);
    }, err => {
      console.log(err);
    });
  }

  onBack(): void {
    if (!this.creatingCard) {
      this.creatingCard = true;
    } else {
      this.router.navigate(['payments']);
    }
  }
}
