import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Member[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'phone', 'actions'];
  dataSource;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.apiService.getMembers().subscribe(resp => {
      this.members = resp;
      this.dataSource = this.members;
      console.log(this.members[0]);
    }, err => {
      console.log(err);
    });
  }

  goToProfile(id: number): void {
    this.router.navigate(['members', id]);
  }

  addMember(): void {
    this.router.navigate(['addmember']);
  }

  removeMember(id: number): void {
    this.apiService.removeMember(id).subscribe(res => {
      console.log(res);
      this.dataSource = this.dataSource.filter(el => el.id !== id);
      this.matSnackBar.open('Member Removed', '', {
        duration: 2000
      });
    }, err => {
      console.log(err);
    });
  }
}
