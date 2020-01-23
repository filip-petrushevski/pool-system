import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CardInfosComponent } from './components/card-infos/card-infos.component';
import { MembersComponent } from './components/members/members.component';
import { MemberComponent } from './components/member/member.component';
import { AddmemberComponent } from './components/addmember/addmember.component';
import { VisitsComponent } from './components/visits/visits.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cardsinfo',
    component: CardInfosComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'members/:id',
    component: MemberComponent
  },
  {
    path: 'addmember',
    component: AddmemberComponent
  },
  {
    path: 'visits',
    component: VisitsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
