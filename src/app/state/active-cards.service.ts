import { Injectable } from '@angular/core';
import { ActiveCardsState, ActiveCardsStore } from './active-cards.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'active-cards' })
export class ActiveCardsService extends CollectionService<ActiveCardsState> {
  constructor(private activeCardsStore: ActiveCardsStore) {
    super(activeCardsStore);
  }
}
