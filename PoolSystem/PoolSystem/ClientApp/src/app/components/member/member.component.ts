import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  updateMemberForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  id: number;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getMember(this.id).subscribe(res => {
      console.log(res);

      this.updateMemberForm.patchValue({
        firstName: res.firstName,
        lastName: res.lastName,
        address: res.address,
        phone: res.phone
      });
    }, err => {
      console.log(err);
    });
  }

  onSubmit(): void {
    if (this.updateMemberForm.invalid) {
      return;
    }

    const member = {
      firstName: this.updateMemberForm.get('firstName').value,
      lastName: this.updateMemberForm.get('lastName').value,
      address: this.updateMemberForm.get('address').value,
      phone: this.updateMemberForm.get('phone').value
    };

    this.apiService.patchMember(this.id, member).subscribe(res => {
      console.log(res);
      this.router.navigate(['members']);
      this.matSnackBar.open('Changes Saved', '', {
        duration: 2000
      });
    }, err => {
      console.log(err);
    });
  }

}
