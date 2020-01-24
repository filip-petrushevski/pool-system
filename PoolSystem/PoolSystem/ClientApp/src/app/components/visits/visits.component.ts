import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {
  addingVisit = false;
  displayedColumns: string[] = ['ID', 'CardID', 'LockerID', 'ArrivalDateTime', 'LeaveDateTime', 'actions'];
  dataSource: Visit[];

  addForm = new FormGroup({
    id: new FormControl('', Validators.required),
    cardId: new FormControl('', Validators.required),
    lockerId: new FormControl('', Validators.required),
    arrivalDate: new FormControl('', Validators.required),
    arrivalTimeFC: new FormControl('', Validators.required),
    leaveDateTime: new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.apiService.getVisits().subscribe(res => {
      this.dataSource = res;
      this.dataSource.forEach(element => {
        element.arrivalDateTime = element.arrivalDateTime.replace('T', ' ');
      });
    }, err => {
      console.log(err);
    });
  }

  removeVisit(id: number): void {
    this.apiService.deleteVisit(id).subscribe(res => {
      this.matSnackBar.open('Visit removed', '', {duration: 2000});
      this.dataSource = this.dataSource.filter(el => el.id !== id);
    }, err => {
      console.log(err);
    });
  }

  newVisit(): void {
    this.addingVisit = true;
  }

  onCancel(): void {
    this.addingVisit = false;
    this.addForm.reset();
  }

  confirmVisit(id: number) {
    this.apiService.confirmVisit(id).subscribe(res => {
      this.matSnackBar.open('Visit confirmed', '', {duration: 2000});
      this.dataSource.forEach(e => {
        if (e.id === id) {
          e.confirmed = true;
          e.leaveDateTime = res.leaveDateTime.split('T')[1].split('\.')[0];
        }
      });
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

  onSubmit(): void {
    if (this.addForm.invalid) {
      return;
    }

    const wholeDate = `${this.addForm.get('arrivalDate').value}`.split(' ');
    const year = wholeDate[3];
    const month = this.convertMonth(wholeDate[1]);
    const day = wholeDate[2];
    const time = this.addForm.get('arrivalTimeFC').value + ':00';
    const arrivalDateTimeTemp = `${year}-${month}-${day} ${time}`;

    const visit: Visit = {
      id: +this.addForm.get('id').value,
      cardId: this.addForm.get('cardId').value,
      lockerId: this.addForm.get('lockerId').value,
      arrivalDateTime: arrivalDateTimeTemp,
      leaveDateTime: null,
      confirmed: false
    };

    this.dataSource = [...this.dataSource, visit];

    this.apiService.postVisit(visit).subscribe(res => {
      console.log(res);
      this.matSnackBar.open('Visit added', '', {
        duration: 2000
      });
      this.onCancel();
    }, err => {
      console.log(err);
    });
  }
}
