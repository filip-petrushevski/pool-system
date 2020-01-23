import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Member } from 'src/app/models/member';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.scss']
})
export class AddmemberComponent implements OnInit {
  addMemberForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(
    private apiService: ApiService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.addMemberForm.invalid) {
      return;
    }

    const member: any = {
      firstName: this.addMemberForm.get('firstName').value,
      lastName: this.addMemberForm.get('lastName').value,
      address: this.addMemberForm.get('address').value,
      phone: this.addMemberForm.get('phone').value
    };

    this.apiService.addMember(member).subscribe(res => {
      console.log(res);
      this.router.navigate(['members']);
      this.matSnackBar.open('Member succesfully added', '', {
        duration: 2000
      });
    }, err => {
      console.log(err);
    });

  }

}
