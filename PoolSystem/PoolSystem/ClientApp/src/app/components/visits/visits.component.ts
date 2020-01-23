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
  displayedColumns: string[] = ['ID', 'CardID', 'LockerID', 'ArrivalDateTime', 'LeaveDateTime'];

  addForm = new FormGroup({
    id: new FormControl('', Validators.required),
    cardId: new FormControl('', Validators.required),
    lockerId: new FormControl('', Validators.required),
    arrivalDateTime: new FormControl('', Validators.required),
    leaveDateTime: new FormControl('', Validators.required),
  });

  constructor(
    private apiService: ApiService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  removeVisit(): void {

  }

  newVisit(): void {
    this.addingVisit = true;
  }

  onCancel(): void {
    this.addingVisit = false;
    this.addForm.reset();
  }

  onSubmit(): void {
    if (this.addForm.invalid) {
      return;
    }

    const visit: Visit = {
      id: this.addForm.get('id').value,
      cardId: this.addForm.get('cardId').value,
      lockerId: this.addForm.get('lockerId').value,
      arrivalDateTime: this.addForm.get('arrivalDateTime').value,
      leaveDateTime: null
    };

    this.apiService.postVisit(visit).subscribe(res => {
      console.log(res);
      this.matSnackBar.open('Visit added', '', {
        duration: 2000
      });
    }, err => {
      console.log(err);
    });
  }
}
