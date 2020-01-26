import { SafeStyle } from '@angular/platform-browser';

export interface CardInfo {
  id: number;
  name: string;
  durationInDays: number;
  visitsInWeek: number;
  price: number;
  imageUrl: string;
  imageStyle: SafeStyle;
}
