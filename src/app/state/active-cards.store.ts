import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Card } from './card.model';
import { CollectionState } from 'akita-ng-fire';

export interface ActiveCardsState extends CollectionState<Card> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'active-cards' })
export class ActiveCardsStore extends EntityStore<ActiveCardsState> {
  constructor() {
    super();
  }
}

