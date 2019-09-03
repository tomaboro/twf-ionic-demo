import { SafeResourceUrl } from '@angular/platform-browser';

export interface Card {
  id: string;
  title: string;
  description: string;
  imageSrc: SafeResourceUrl;
  clicks: number;
}
