import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/models/card-info';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card-infos',
  templateUrl: './card-infos.component.html',
  styleUrls: ['./card-infos.component.scss']
})
export class CardInfosComponent implements OnInit {

  cardInfos: CardInfo[];

  constructor(
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.apiService.getCardInfos().subscribe(resp => {
      this.cardInfos = resp;
    }, err => {
      console.log(err);
    });
  }

}
