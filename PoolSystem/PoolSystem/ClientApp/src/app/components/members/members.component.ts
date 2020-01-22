import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Member[];
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'phone', 'actions'];
  dataSource;
  constructor(
    private apiService: ApiService,
    private router: Router
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

  goToProfile(id: number) {
    this.router.navigate(['members', id]);
  }

}
