import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/models/card-info';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-infos',
  templateUrl: './card-infos.component.html',
  styleUrls: ['./card-infos.component.scss']
})
export class CardInfosComponent implements OnInit {

  cardInfos: CardInfo[];

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.apiService.getCardInfos().subscribe(resp => {
      this.cardInfos = resp;
      this.cardInfos.forEach(ci => ci.imageStyle = this.sanitizer.bypassSecurityTrustStyle(
        `url(${ci.imageUrl}) no-repeat center center`));
      console.log(this.cardInfos);
    }, err => {
      console.log(err);
    });
  }

}
